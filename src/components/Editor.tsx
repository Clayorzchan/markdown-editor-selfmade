import React from 'react';
import { marked } from 'marked';
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs';
import 'prismjs/components/prism-markdown';
import 'prismjs/themes/prism-tomorrow.css';
import './Editor.css';

marked.setOptions({
  breaks: true,
  gfm: true
});

interface EditorProps {
  markdown: string;
  setMarkdown: (value: string) => void;
}

const MarkdownEditor: React.FC<EditorProps> = ({ markdown, setMarkdown }) => {
  const renderMarkdown = () => {
    return { __html: marked(markdown) };
  };

  return (
    <div className="editor-container">
      <div className="editor-pane">
        <div className="pane-header">编辑</div>
        <div className="editor-wrapper">
          <Editor
            value={markdown}
            onValueChange={setMarkdown}
            highlight={code => Prism.highlight(code, Prism.languages.markdown, 'markdown')}
            padding={16}
            className="code-editor"
            style={{
              fontFamily: '"Fira Code", "Fira Mono", monospace',
              fontSize: 14,
              backgroundColor: '#2d2d2d',
              minHeight: '100%',
              lineHeight: 1.6
            }}
            textareaClassName="code-textarea"
          />
        </div>
      </div>
      <div className="preview-pane">
        <div className="pane-header">预览</div>
        <div className="preview-wrapper">
          <div 
            className="markdown-preview"
            dangerouslySetInnerHTML={renderMarkdown()}
          />
        </div>
      </div>
    </div>
  );
};

export default MarkdownEditor;
