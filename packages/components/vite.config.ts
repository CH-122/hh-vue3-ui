import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue(), dts({ include: ['src'] })],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'js'}`,
    },
    rollupOptions: {
      external: ['vue'],
      input: './index.ts',
      output: [
        {
          format: 'es',
          entryFileNames: '[name].mjs',
          //让打包目录和我们目录对应
          // preserveModules: true,
          exports: 'named',
          //配置打包根目录
          dir: 'dist/esm',
        },
        {
          //打包格式
          format: 'cjs',
          //打包后文件名
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          // preserveModules: true,
          exports: 'named',
          //配置打包根目录
          dir: 'dist/cjs',
        },
      ],
    },
  },
})
