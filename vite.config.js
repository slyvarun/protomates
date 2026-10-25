import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  plugins: [
    react(),
    {
      name: 'dev-html-transform',
      transformIndexHtml: {
        order: 'pre',
        handler(html) {
          // Strip any static compiled bundle tags and inject the source entrypoint for both dev and build
          const stripped = html
            .replace(/<link rel="stylesheet" crossorigin href="\.\/assets\/[^"]+">\s*/g, '')
            .replace(/<script type="module" crossorigin src="\.\/assets\/[^"]+"><\/script>\s*/g, '');
          
          if (!stripped.includes('/src/main.jsx')) {
            return stripped.replace(
              /<\/body>/,
              '  <script type="module" src="/src/main.jsx"></script>\n</body>'
            );
          }
          return stripped;
        }
      }
    }
  ],
  server: {
    host: true,
    allowedHosts: true,
  },
})

