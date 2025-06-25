import app from './app';
import { env } from './config/env';

const start = async () => {
  try {
    await app.listen({
      port: env.PORT,
      host: '0.0.0.0',
    });
    
    console.log(`🚀 Server running on http://localhost:${env.PORT}`);
    console.log(`📡 Fruits API available at http://localhost:${env.PORT}/api/fruits`);
  } catch (err) {
    console.error('Error starting server:', err);
    process.exit(1);
  }
};

start();