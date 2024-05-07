import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'

// https://vitejs.dev/config/

export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd())
  const { VITE_APP_ENV, VITE_APP_BASE_API, VITE_APP_SERVER_PORT } = env
  return {
    base: VITE_APP_ENV === 'production' ? '/' : '/',
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
        imports: ['vue', 'vue-router', 'pinia'],
        dts: 'src/dts/auto-import.d.ts',
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/]
      }),
      Components({
        resolvers: [ElementPlusResolver()],
        deep: true,
        dirs: ['src/components', 'src/layout'],
        dts: 'src/dts/components.d.ts'
      })
    ],
    // 路径别名
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      },
      extensions: ['.js', '.json', '.ts']
    },
    // 跨域代理
    server: {
      port: VITE_APP_SERVER_PORT,
      host: true,
      open: false,
      proxy: {
        '/api': {
          target: VITE_APP_BASE_API,
          changeOrigin: true,
          rewrite: (p) => p.replace(/^\/api/, '')
        }
      }
    }
  }
})
