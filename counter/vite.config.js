import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  base: '/counter/', // 예: '/my-counter-game/'
  plugins: [react()],
});
