import React from 'react';
import './Toolbar.css';

interface ToolbarProps {
  onSave: () => void;
  onOpen: () => void;
  insertText: (before: string, after?: string) => void;
  filePath?: string;
}

const Toolbar: React.FC<ToolbarProps> = ({ onSave, onOpen, insertText, filePath }) => {
  return (
    <div className="toolbar">
      <div className="toolbar-left">
        <button className="toolbar-btn" onClick={onOpen} title="打开文件">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
          </svg>
          打开
        </button>
        <button className="toolbar-btn" onClick={onSave} title="保存文件">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
            <polyline points="17 21 17 13 7 13 7 21"></polyline>
            <polyline points="7 3 7 8 15 8"></polyline>
          </svg>
          保存
        </button>
        <div className="toolbar-divider"></div>
        <button className="toolbar-btn" onClick={() => insertText('# ')} title="标题1">
          H1
        </button>
        <button className="toolbar-btn" onClick={() => insertText('## ')} title="标题2">
          H2
        </button>
        <button className="toolbar-btn" onClick={() => insertText('### ')} title="标题3">
          H3
        </button>
        <div className="toolbar-divider"></div>
        <button className="toolbar-btn" onClick={() => insertText('**', '**')} title="粗体">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>
            <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>
          </svg>
        </button>
        <button className="toolbar-btn" onClick={() => insertText('*', '*')} title="斜体">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="19" y1="4" x2="10" y2="4"></line>
            <line x1="14" y1="20" x2="5" y2="20"></line>
            <line x1="15" y1="4" x2="9" y2="20"></line>
          </svg>
        </button>
        <button className="toolbar-btn" onClick={() => insertText('~~', '~~')} title="删除线">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17.3 4.9c-.7-.5-1.7-.9-2.8-.9-1.9 0-3.3 1.1-3.8 2.7-.2.6-.2 1.2-.2 1.8v.2c0 2.1 1.5 3.3 4 4.1 1 .3 2.1.5 3 .9.7.3 1.3.8 1.3 1.7 0 1.4-1.2 2.3-3.2 2.3-1.3 0-2.4-.4-3.4-1.2-.4-.3-.8-.7-1.1-1.2"></path>
            <line x1="3" y1="12" x2="21" y2="12"></line>
          </svg>
        </button>
        <div className="toolbar-divider"></div>
        <button className="toolbar-btn" onClick={() => insertText('`', '`')} title="行内代码">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        </button>
        <button className="toolbar-btn" onClick={() => insertText('```\n', '\n```')} title="代码块">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="9" y1="9" x2="15" y2="9"></line>
            <line x1="9" y1="15" x2="15" y2="15"></line>
          </svg>
        </button>
        <div className="toolbar-divider"></div>
        <button className="toolbar-btn" onClick={() => insertText('- ')} title="无序列表">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="8" y1="6" x2="21" y2="6"></line>
            <line x1="8" y1="12" x2="21" y2="12"></line>
            <line x1="8" y1="18" x2="21" y2="18"></line>
            <line x1="3" y1="6" x2="3.01" y2="6"></line>
            <line x1="3" y1="12" x2="3.01" y2="12"></line>
            <line x1="3" y1="18" x2="3.01" y2="18"></line>
          </svg>
        </button>
        <button className="toolbar-btn" onClick={() => insertText('1. ')} title="有序列表">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="10" y1="6" x2="21" y2="6"></line>
            <line x1="10" y1="12" x2="21" y2="12"></line>
            <line x1="10" y1="18" x2="21" y2="18"></line>
            <path d="M4 6h1v4"></path>
            <path d="M4 10h2"></path>
            <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"></path>
          </svg>
        </button>
        <button className="toolbar-btn" onClick={() => insertText('> ')} title="引用">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
        <div className="toolbar-divider"></div>
        <button className="toolbar-btn" onClick={() => insertText('[链接文本](', ')')} title="链接">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
          </svg>
        </button>
        <button className="toolbar-btn" onClick={() => insertText('![图片描述](', ')')} title="图片">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <circle cx="8.5" cy="8.5" r="1.5"></circle>
            <polyline points="21 15 16 10 5 21"></polyline>
          </svg>
        </button>
      </div>
      {filePath && (
        <div className="toolbar-right">
          <span className="file-path">{filePath}</span>
        </div>
      )}
    </div>
  );
};

export default Toolbar;
