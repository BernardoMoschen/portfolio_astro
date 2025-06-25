import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

const siteUrl = 'https://bernardo-moschen.vercel.app/';
const siteDomain = 'vercel.app';

export default defineConfig({
  site: siteUrl,
  integrations: [
    react(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    })
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    optimizeDeps: {
      include: ['@mui/material', '@mui/icons-material']
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'mui-core': ['@mui/material'],
            'mui-icons': ['@mui/icons-material'],
            'react-vendor': ['react', 'react-dom']
          }
        }
      }
    }
  },
  image: {
    domains: [siteDomain]
  },
  compressHTML: true,
  scopedStyleStrategy: 'where'
});