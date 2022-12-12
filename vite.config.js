// import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path, { resolve } from 'path'
import vueJsx from "@vitejs/plugin-vue-jsx";

function pathResolve(dir) {
  return resolve(process.cwd(), '.', dir)
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
    plugins: [
      vue(),
      vueJsx({})
    ],
    resolve: {
      alias: {
        // '@': fileURLToPath(new URL('./src', import.meta.url))
        '@': pathResolve('src')
      }
    },
    define: {
      'process.env.NODE_ENV': JSON.stringify(mode),
    },
    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/index.js'),
        name: 'com',
        fileName: (format) => `com.${format}.js`
      },
      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖
        external: ['vue'],
        output: {
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            vue: 'Vue'
          }
        }
      }
    },
    server: {
      host: '0.0.0.0', //ip地址
      port: 8080, //端口号
      open: false, //启动后是否自动打开浏览器
      hmr: true,
      proxy: {
        "/api": {
          target: "https://test-wx-admin.chanel.com.cn",
          changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
          ws: false, // 是否启用  websockets;
          rewrite: (path) => path.replace(/^\/api/, ""),
          pathRewrite: {
            // 去掉 路径中的  /api  的这一截
            "^/api": ""
          },
        },
      },
    },
  }
})
