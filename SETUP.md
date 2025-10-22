# 项目启动指南

## 环境要求

- Node.js 18+
- npm 或 yarn

## 快速启动

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

项目将在 http://localhost:3000 启动

### 3. 启动协同编辑服务器（可选）

如果需要真正的协同编辑功能，需要启动 Y.js WebSocket 服务器：

```bash
# 全局安装 y-websocket 服务器
npm install -g y-websocket

# 启动服务器
y-websocket-server --port 1234
```

或者使用 Docker：

```bash
docker run -p 1234:1234 yjs/y-websocket
```

## 开发命令

```bash
# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview

# 代码检查
npm run lint

# 代码格式化
npm run format

# 检查代码格式
npm run format:check
```

## 项目功能

### 当前已实现

- ✅ 基础白板功能（基于 tldraw）
- ✅ 现代化 UI 界面（shadcn/ui）
- ✅ 文件上传界面
- ✅ 响应式设计
- ✅ TypeScript 类型安全
- ✅ 代码规范配置

### 待完善功能

- 🔄 真实的协同编辑（需要集成 Y.js）
- 🔄 文件上传后端服务
- 🔄 用户认证系统
- 🔄 实时用户状态显示

## 技术栈

- **前端**: React 18 + TypeScript + Vite
- **UI**: Tailwind CSS + shadcn/ui
- **白板**: tldraw
- **协同**: Y.js + y-websocket（待完善）
- **代码规范**: ESLint + Prettier

## 目录结构

```
src/
├── components/          # React 组件
│   ├── ui/             # shadcn UI 组件
│   ├── Header.tsx      # 顶部导航
│   └── CollaborativeWhiteboard.tsx  # 白板组件
├── hooks/              # 自定义 Hooks
├── lib/                # 工具函数
├── types/              # 类型定义
└── styles/             # 样式文件
```

## 开发注意事项

1. 遵循 `CODE_STANDARDS.md` 中的代码规范
2. 提交前运行 `npm run lint` 和 `npm run format`
3. 使用 TypeScript 严格模式，避免 `any` 类型
4. 组件使用函数式组件 + Hooks
5. 样式优先使用 Tailwind CSS

## 部署

### 前端部署

```bash
npm run build
# 将 dist 目录部署到静态文件服务器
```

### 协同服务器部署

```bash
# 使用 PM2 部署
pm2 start y-websocket-server --name "yjs-server" -- --port 1234

# 或使用 Docker
docker run -d -p 1234:1234 --name yjs-server yjs/y-websocket
```

## 故障排除

### 常见问题

1. **端口被占用**

   ```bash
   # 修改 vite.config.ts 中的端口
   server: { port: 3001 }
   ```

2. **依赖安装失败**

   ```bash
   # 清除缓存重新安装
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **协同编辑不工作**
   - 确保 Y.js WebSocket 服务器正在运行
   - 检查防火墙设置
   - 确认 WebSocket 连接地址正确

## 贡献指南

1. Fork 项目
2. 创建功能分支
3. 遵循代码规范
4. 提交 Pull Request

更多详细信息请参考 `README.md` 和 `CODE_STANDARDS.md`。
