import { spawn } from 'child_process';

const server = spawn('tsx', ['src/server.ts'], {
  stdio: 'inherit',
});

server.on('close', (code) => {
  console.log(`Server process exited with code ${code}`);
});