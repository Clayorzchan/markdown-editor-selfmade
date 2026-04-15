# Markdown Editor

一个类似 Typora 的 Markdown 编辑器，使用 Electron + React + TypeScript 构建。

## 功能特性

- 📝 **实时编辑和预览** - 双栏布局，左侧编辑，右侧实时预览
- 🎨 **语法高亮** - 使用 highlight.js 和 Prism.js 实现代码高亮
- 💾 **文件保存和打开** - 支持本地文件操作
- 🛠️ **工具栏快捷操作** - 丰富的格式化工具
- 🌙 **深色主题** - 护眼的暗色界面

## 技术栈

- **Electron** - 桌面应用框架
- **React 18** - UI 框架
- **TypeScript** - 类型安全
- **Vite** - 构建工具
- **marked** - Markdown 解析器
- **highlight.js** - 代码高亮
- **react-simple-code-editor** - 代码编辑器组件

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run electron:dev
```

这会同时启动 Vite 开发服务器和 Electron 应用。

### 构建

```bash
npm run build
```

构建 React 应用到 `dist` 目录。

```bash
npm run electron
```

运行 Electron 应用（需要先执行 build）。

## 使用说明

### 工具栏

- **打开** - 打开本地 Markdown 文件
- **保存** - 保存当前文档
- **H1/H2/H3** - 插入标题
- **粗体/斜体/删除线** - 文本格式化
- **行内代码/代码块** - 插入代码
- **无序列表/有序列表** - 插入列表
- **引用** - 插入引用块
- **链接/图片** - 插入链接和图片

### 快捷键提示

选中文本后点击工具栏按钮可以快速格式化选中文本。

## 项目结构

```
.
├── electron/
│   ├── main.js          # Electron 主进程
│   └── preload.js       # 预加载脚本
├── src/
│   ├── components/
│   │   ├── Editor.tsx   # 编辑器组件
│   │   └── Toolbar.tsx  # 工具栏组件
│   ├── App.tsx          # 主应用组件
│   ├── main.tsx         # 入口文件
│   └── index.css        # 全局样式
├── index.html           # HTML 模板
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 许可证

MIT
