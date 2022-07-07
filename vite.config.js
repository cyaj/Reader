import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')

// import Components from 'unplugin-vue-components/vite'
// import { VantResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // Components({
    //   resolvers: [VantResolver()]
    // })
  ],
  resolve: {
    // 导入文件时省略后缀
    extensions: ['.js', '.vue'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  // 代理
  server: {
    proxy: {
      '/searchBook': {
        target: 'https://souxs.leeyegy.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/searchBook/, '')
      }
    }
  }
})
