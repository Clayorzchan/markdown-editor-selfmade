# Windows 版本打包说明

## 方式一：在 Windows 机器上打包（推荐）

### 前置要求

1. 安装 Node.js (建议 v18 或更高版本)
2. 安装 Git

### 步骤

1. **克隆或复制项目到 Windows 机器**

   ```bash
   # 如果有 git 仓库
   git clone <你的仓库地址>
   
   # 或者直接复制整个文件夹
   ```

2. **进入项目目录**

   ```bash
   cd markdown-editor
   ```

3. **配置 npm 镜像（可选，国内推荐）**

   ```bash
   npm config set registry https://mirrors.cloud.tencent.com/npm/
   npm config set electron_mirror https://npmmirror.com/mirrors/electron/
   ```

4. **安装依赖**

   ```bash
   npm install
   ```

5. **打包 Windows 版本**

   ```bash
   # 打包成 NSIS 安装包（.exe）
   npm run build
   npx electron-builder --win
   ```

6. **找到安装包**

   打包完成后，安装包位于：
   ```
   release/Markdown Editor Setup 1.0.0.exe
   ```

---

## 方式二：使用 GitHub Actions 自动打包（推荐用于分发）

创建 `.github/workflows/build.yml`：

```yaml
name: Build Windows

on:
  push:
    tags:
      - 'v*'

jobs:
  build:
    runs-on: windows-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          
      - name: Install dependencies
        run: npm install
        
      - name: Build
        run: npm run build
        
      - name: Package Windows
        run: npx electron-builder --win
        
      - name: Upload artifact
        uses: actions/upload-artifact@v3
        with:
          name: windows-installer
          path: release/*.exe
```

---

## 方式三：在 macOS 上交叉编译（需要 Wine）

### 安装 Wine

```bash
# 使用 Homebrew 安装 Wine
brew install --cask wine-stable
```

### 打包

```bash
npm run build
npx electron-builder --win
```

---

## 安装包功能

生成的 Windows 安装包具有以下特性：

- ✅ 可自定义安装路径
- ✅ 创建桌面快捷方式
- ✅ 创建开始菜单快捷方式
- ✅ 卸载程序
- ✅ 自动更新支持（可选）

---

## 项目命令

```bash
# 开发模式
npm run dev

# 构建 React 应用
npm run build

# 打包 macOS 版本
npm run pack

# 打包 Windows 版本
npx electron-builder --win

# 打包所有平台
npx electron-builder -mwl
```

---

## 注意事项

1. **首次打包**：会下载 Electron 二进制文件，需要稳定的网络连接
2. **代码签名**：Windows 安装包建议进行代码签名，否则可能会有安全警告
3. **图标**：可以在 `build/icon.ico` 放置 Windows 图标文件
4. **版本号**：修改 `package.json` 中的 `version` 字段来更新版本号
