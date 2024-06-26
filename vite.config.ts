import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // base: "http://localhost:5001/api",
  plugins: [react()],
});
