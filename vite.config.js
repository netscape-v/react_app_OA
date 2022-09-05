import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // 端口
    port: 8080,
    // ip
    host: '0.0.0.0',
    // 要不要自动打开浏览器
    open: false,
    // 要不要启用热跟新
    // hmr: true,
    // 代理转发
    proxy: {
      // 前缀
      '/api': {
        // 服务端接口的地址
        target: 'http://localhost:8090',
        // 发送请求头中host会设置成target
        changeOrigin: true,
        // 请求路由匹配规则
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 javascript
        javascriptEnabled: true,
      },
    }
  }
})
