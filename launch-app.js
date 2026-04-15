const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');
const http = require('http');

console.log('🚀 启动 Markdown Editor...');

function checkServer(url, timeout = 10000) {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();
    
    function check() {
      http.get(url, (res) => {
        if (res.statusCode === 200) {
          resolve(true);
        } else {
          if (Date.now() - startTime < timeout) {
            setTimeout(check, 500);
          } else {
            reject(new Error('Server timeout'));
          }
        }
      }).on('error', () => {
        if (Date.now() - startTime < timeout) {
          setTimeout(check, 500);
        } else {
          reject(new Error('Server timeout'));
        }
      });
    }
    
    check();
  });
}

async function launch() {
  const distPath = path.join(__dirname, 'dist', 'index.html');
  
  if (fs.existsSync(distPath)) {
    console.log('📦 使用构建版本启动...');
    const electron = spawn('npx', ['electron', '.'], {
      cwd: __dirname,
      stdio: 'inherit',
      env: {
        ...process.env,
        ELECTRON_MIRROR: 'https://npmmirror.com/mirrors/electron/'
      }
    });
    
    electron.on('close', (code) => {
      process.exit(code);
    });
  } else {
    console.log('🔧 开发模式启动...');
    console.log('启动 Vite 开发服务器...');
    
    const vite = spawn('npx', ['vite'], {
      cwd: __dirname,
      stdio: 'pipe',
      env: { ...process.env }
    });
    
    vite.stdout.on('data', (data) => {
      process.stdout.write(data);
    });
    
    vite.stderr.on('data', (data) => {
      process.stderr.write(data);
    });
    
    try {
      await checkServer('http://localhost:5173');
      console.log('✅ 开发服务器已就绪');
      
      const electron = spawn('npx', ['electron', '.'], {
        cwd: __dirname,
        stdio: 'inherit',
        env: {
          ...process.env,
          ELECTRON_MIRROR: 'https://npmmirror.com/mirrors/electron/'
        }
      });
      
      electron.on('close', (code) => {
        vite.kill();
        process.exit(code);
      });
      
    } catch (error) {
      console.error('❌ 启动失败:', error.message);
      vite.kill();
      process.exit(1);
    }
  }
}

launch();
