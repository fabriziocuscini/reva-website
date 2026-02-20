import posthtml from '@malobre/vite-plugin-posthtml';
import components from 'posthtml-component';
import FullReload from 'vite-plugin-full-reload';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    posthtml({
      plugins: [
        components({
          root: './src',
          folders: ['components'],
        }),
      ],
      options: {
        recognizeSelfClosing: true,
      },
    }),
    FullReload(['index.html', 'src/components/**/*.html']),
  ],
});
