import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import chokidar from 'chokidar';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'watch-external',
      configureServer({ _, ws }) {
        const apiWatcher = chokidar.watch('./api', {
          ignoreInitial: true
        });

        apiWatcher.on('change', () => {
          ws.send({
            type: 'full-reload',
            path: '*'
          });
        });
      }
    }]
})

