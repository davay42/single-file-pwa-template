import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { viteSingleFile } from "vite-plugin-singlefile"

export default defineConfig({
  base: './',
  server: {
    port: 1337,
    strictPort: false,
  },
  preview: {
    host: "0.0.0.0",
    port: 31337
  },
  plugins: [
    vue(),
    UnoCSS(),
    viteSingleFile(),
    viteBuildScript(),
    copyManifest()
  ],
})


function viteBuildScript() {
  return {
    name: 'vite-build-script',
    transformIndexHtml(html) {
      if (process.env.NODE_ENV === 'production') {
        return html.replace('</head>', `
  <script>
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('Service Worker registered with scope: ', registration.scope);
          })
          .catch((error) => {
            console.error('Service Worker registration failed: ', error);
          });
      });
    }
  </script>
  
  </head>`);
      }
      return html;
    },
  };
}

import { copyFileSync } from 'fs';

function copyManifest() {
  return {
    name: 'vite-pwa-manifest-sync',
    apply: 'build',
    writeBundle: () => copyFileSync('dist/manifest.json', 'dist/manifest.webmanifest')
  }
}