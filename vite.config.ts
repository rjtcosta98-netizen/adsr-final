import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  optimizeDeps: {
    include: ['react', 'react-dom'], // Adiciona aqui outras bibliotecas pesadas que uses
  },
  server: {
    watch: {
      usePolling: false, // Mantém false se estiveres em SSD, true se estiveres em ambiente virtualizado (Docker/WSL lento)
    }
  }
})
