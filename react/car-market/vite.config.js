import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx',
    include: [
      // Add this to enable JSX syntax in .js files
      'src/**/*.js',
    ],
  },
});
