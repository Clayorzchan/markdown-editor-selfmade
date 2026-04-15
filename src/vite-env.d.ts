/// <reference types="vite/client" />

interface Window {
  electronAPI?: {
    saveFile: (content: string) => Promise<{ success: boolean; filePath?: string }>;
    openFile: () => Promise<{ success: boolean; content?: string; filePath?: string }>;
  };
}
