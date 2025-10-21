# 代码规范文档

## 项目概述
这是一个基于 React + TypeScript + Y.js + tldraw + shadcn 的协同编辑白板项目。

## 技术栈
- **前端框架**: React 18 + TypeScript
- **构建工具**: Vite
- **样式**: Tailwind CSS + shadcn/ui
- **协同编辑**: Y.js + y-websocket
- **白板功能**: tldraw
- **代码规范**: ESLint + Prettier

## 代码风格规范

### 1. TypeScript 规范
- 使用 TypeScript 严格模式
- 优先使用 `interface` 定义对象类型
- 使用 `type` 定义联合类型和基础类型别名
- 避免使用 `any`，必要时使用 `unknown`
- 函数参数和返回值必须有明确的类型定义

```typescript
// ✅ 推荐
interface User {
  id: string
  name: string
  email: string
}

// ✅ 推荐
type Status = 'loading' | 'success' | 'error'

// ❌ 避免
function handleData(data: any): any {
  return data
}
```

### 2. React 组件规范
- 使用函数组件 + Hooks
- 组件名使用 PascalCase
- Props 接口以组件名 + Props 命名
- 使用 `React.FC` 或直接函数声明

```typescript
// ✅ 推荐
interface UserCardProps {
  user: User
  onEdit: (id: string) => void
}

export function UserCard({ user, onEdit }: UserCardProps) {
  return (
    <div className="p-4 border rounded">
      <h3>{user.name}</h3>
      <button onClick={() => onEdit(user.id)}>编辑</button>
    </div>
  )
}
```

### 3. 文件和目录命名
- 组件文件使用 PascalCase: `UserCard.tsx`
- 工具函数文件使用 camelCase: `formatDate.ts`
- 常量文件使用 UPPER_SNAKE_CASE: `API_ENDPOINTS.ts`
- 目录使用 kebab-case: `user-management/`

### 4. 导入导出规范
- 优先使用命名导出
- 按以下顺序组织导入：
  1. React 相关
  2. 第三方库
  3. 内部组件
  4. 工具函数
  5. 类型定义

```typescript
import React, { useState, useEffect } from 'react'
import { Button } from '@radix-ui/react-button'
import { UserCard } from '@/components/UserCard'
import { formatDate } from '@/lib/utils'
import type { User } from '@/types'
```

### 5. CSS 和样式规范
- 使用 Tailwind CSS 进行样式编写
- 使用 `cn()` 函数合并类名
- 组件样式优先使用 Tailwind 类
- 复杂样式可以提取为 CSS 变量

```typescript
import { cn } from '@/lib/utils'

export function Card({ className, children, ...props }) {
  return (
    <div
      className={cn(
        'rounded-lg border bg-card text-card-foreground shadow-sm',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
```

### 6. 状态管理规范
- 简单状态使用 `useState`
- 复杂状态使用 `useReducer`
- 全局状态考虑使用 Context API
- 异步状态使用自定义 Hook 封装

### 7. 错误处理规范
- 使用 Error Boundary 处理组件错误
- 异步操作必须有错误处理
- 用户友好的错误提示

```typescript
try {
  const result = await api.fetchData()
  setData(result)
} catch (error) {
  console.error('获取数据失败:', error)
  setError('获取数据失败，请稍后重试')
}
```

### 8. 性能优化规范
- 使用 `React.memo` 优化组件渲染
- 使用 `useMemo` 和 `useCallback` 优化计算和函数
- 避免在渲染函数中创建对象和函数
- 合理使用 `lazy` 和 `Suspense` 进行代码分割

### 9. 测试规范
- 组件测试使用 React Testing Library
- 工具函数使用 Jest
- 测试文件命名: `Component.test.tsx`
- 测试覆盖率目标: 80%+

### 10. Git 提交规范
使用 Conventional Commits 规范：

```
feat: 新功能
fix: 修复bug
docs: 文档更新
style: 代码格式调整
refactor: 代码重构
test: 测试相关
chore: 构建工具或辅助工具的变动
```

示例：
```
feat: 添加用户协同编辑功能
fix: 修复文件上传失败的问题
docs: 更新API文档
```

## 项目结构
```
src/
├── components/          # 组件目录
│   ├── ui/             # shadcn UI 组件
│   └── ...             # 业务组件
├── lib/                # 工具函数
├── hooks/              # 自定义 Hooks
├── types/              # 类型定义
├── constants/          # 常量定义
└── styles/             # 样式文件
```

## 开发流程
1. 创建功能分支: `git checkout -b feature/功能名称`
2. 开发并测试功能
3. 运行代码检查: `npm run lint`
4. 格式化代码: `npm run format`
5. 提交代码并推送
6. 创建 Pull Request

## 代码审查要点
- 代码是否符合规范
- 类型定义是否完整
- 错误处理是否充分
- 性能是否有优化空间
- 测试覆盖是否充分

遵循这些规范可以确保代码质量和团队协作效率。