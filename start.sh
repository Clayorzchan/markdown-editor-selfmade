#!/bin/bash

echo "==================================="
echo "  Markdown Editor - 快速启动"
echo "==================================="
echo ""
echo "选择启动方式："
echo "1) 在浏览器中运行（推荐，无需 Electron）"
echo "2) 安装依赖并运行 Electron 版本"
echo "3) 仅安装依赖"
echo ""
read -p "请输入选项 (1/2/3): " choice

case $choice in
  1)
    echo ""
    echo "启动浏览器版本..."
    if [ ! -d "node_modules" ]; then
      echo "首次运行，安装轻量级依赖..."
      npm install --omit=optional
    fi
    npm run dev
    ;;
  2)
    echo ""
    echo "安装完整依赖并启动 Electron..."
    npm install
    npm run electron:dev
    ;;
  3)
    echo ""
    echo "安装依赖..."
    npm install
    ;;
  *)
    echo "无效选项"
    exit 1
    ;;
esac
