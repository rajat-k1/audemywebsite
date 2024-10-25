import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/audemywebsite/',  // replace 'your-repo-name' with the name of your GitHub repository
})
