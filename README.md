# 协同编辑白板项目

一个基于 React + TypeScript + Y.js + tldraw + shadcn 的实时协同编辑白板应用。

## 功能特性

- 🎨 **实时协同编辑** - 基于 Y.js 的多人实时协同编辑
- 🖼️ **丰富的绘图工具** - 集成 tldraw 提供专业的绘图体验
- 📁 **文件上传** - 支持文件和图片上传功能
- 👥 **用户管理** - 实时显示在线用户和光标位置
- 🎯 **现代化 UI** - 基于 shadcn/ui 的美观界面
- 📱 **响应式设计** - 适配各种屏幕尺寸

## 技术栈

- **前端框架**: React 18 + TypeScript
- **构建工具**: Vite
- **样式方案**: Tailwind CSS + shadcn/ui
- **协同编辑**: Y.js + y-websocket
- **白板引擎**: tldraw
- **代码规范**: ESLint + Prettier

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 启动协同服务器

需要启动一个 Y.js WebSocket 服务器来支持协同编辑功能：

```bash
# 安装 y-websocket 服务器
npm install -g y-websocket

# 启动服务器（默认端口 1234）
y-websocket-server
```

### 构建生产版本

```bash
npm run build
```

## 项目结构

```
src/
├── components/          # React 组件
│   ├── ui/             # shadcn UI 组件
│   ├── Header.tsx      # 顶部导航栏
│   └── CollaborativeWhiteboard.tsx  # 协同白板组件
├── hooks/              # 自定义 React Hooks
├── lib/                # 工具函数
├── types/              # TypeScript 类型定义
└── styles/             # 样式文件
```

## 开发规范

请参考 [CODE_STANDARDS.md](./CODE_STANDARDS.md) 了解详细的代码规范和开发流程。

## 主要功能

### 协同编辑
- 实时同步绘图操作
- 多用户光标显示
- 冲突解决机制

### 文件管理
- 支持图片上传和显示
- 文件拖拽功能
- 文件格式验证

### 用户体验
- 响应式设计
- 深色/浅色主题切换
- 键盘快捷键支持

## 部署

### 前端部署
构建后将 `dist` 目录部署到静态文件服务器即可。

### 协同服务器部署
需要部署 Y.js WebSocket 服务器来支持协同功能：

```bash
# 使用 Docker 部署
docker run -p 1234:1234 yjs/y-websocket
```

## 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 许可证

MIT License