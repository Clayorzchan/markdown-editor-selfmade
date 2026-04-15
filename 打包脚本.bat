@echo off
chcp 65001 >nul
echo ========================================
echo   Markdown Editor - Windows 打包脚本
echo ========================================
echo.

echo [1/4] 检查 Node.js...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ 未找到 Node.js，请先安装 Node.js
    pause
    exit /b 1
)
echo ✅ Node.js 已安装
node --version
echo.

echo [2/4] 配置 npm 镜像...
call npm config set registry https://mirrors.cloud.tencent.com/npm/
call npm config set electron_mirror https://npmmirror.com/mirrors/electron/
echo ✅ 镜像配置完成
echo.

echo [3/4] 安装依赖...
if not exist "node_modules" (
    call npm install
    if %errorlevel% neq 0 (
        echo ❌ 依赖安装失败
        pause
        exit /b 1
    )
) else (
    echo ✅ 依赖已存在，跳过安装
)
echo.

echo [4/4] 开始打包...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ 构建失败
    pause
    exit /b 1
)

call npx electron-builder --win
if %errorlevel% neq 0 (
    echo ❌ 打包失败
    pause
    exit /b 1
)

echo.
echo ========================================
echo   ✅ 打包完成！
echo ========================================
echo.
echo 安装包位置：
echo %cd%\release\
echo.
dir /b release\*.exe
echo.
pause
