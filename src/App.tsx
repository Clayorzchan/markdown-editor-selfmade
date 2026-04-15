import React, { useState } from 'react';
import Editor from './components/Editor';
import Toolbar from './components/Toolbar';
import './App.css';

const App: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>(`# 欢迎使用 Markdown 编辑器

这是一个类似 Typora 的 Markdown 编辑器，支持实时预览。

## 功能特性

- 📝 **实时编辑和预览**
- 🎨 **语法高亮**
- 💾 **文件保存和打开**
- 🛠️ **工具栏快捷操作**

## 代码示例

\`\`\`javascript
function hello() {
  console.log('Hello, World!');
}
\`\`\`

## 列表

1. 第一项
2. 第二项
3. 第三项

- 无序列表项
- 另一个无序列表项

> 这是一段引用文本

**粗体文本** 和 *斜体文本*

[访问 GitHub](https://github.com)
`);

  const [filePath, setFilePath] = useState<string>('');

  const handleSave = async () => {
    if (window.electronAPI) {
      const result = await window.electronAPI.saveFile(markdown);
      if (result.success && result.filePath) {
        setFilePath(result.filePath);
      }
    } else {
      const blob = new Blob([markdown], { type: 'text/markdown' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'document.md';
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  const handleOpen = async () => {
    if (window.electronAPI) {
      const result = await window.electronAPI.openFile();
      if (result.success && result.content) {
        setMarkdown(result.content);
        if (result.filePath) {
          setFilePath(result.filePath);
        }
      }
    } else {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = '.md,.txt';
      input.onchange = (e: any) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
          setMarkdown(event.target?.result as string);
        };
        reader.readAsText(file);
      };
      input.click();
    }
  };

  const insertText = (before: string, after: string = '') => {
    const textarea = document.querySelector('textarea');
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = markdown.substring(start, end);
    const newText = markdown.substring(0, start) + before + selectedText + after + markdown.substring(end);
    
    setMarkdown(newText);
    
    setTimeout(() => {
      textarea.focus();
      const newCursorPos = start + before.length + selectedText.length;
      textarea.setSelectionRange(newCursorPos, newCursorPos);
    }, 0);
  };

  return (
    <div className="app">
      <Toolbar 
        onSave={handleSave} 
        onOpen={handleOpen} 
        insertText={insertText}
        filePath={filePath}
      />
      <Editor markdown={markdown} setMarkdown={setMarkdown} />
    </div>
  );
};

export default App;
