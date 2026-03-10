import { fileURLToPath, URL } from 'node:url';
import process from 'process';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue'
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    plugins: [
      vue(),
    ],
    base: env.VITE_BASE_URL || '/',
    root: './',
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            // node_modules 폴더 내의 패키지들을 별도의 청크로 분리
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
          }
        }
      },
      outDir: 'dist', // 빌드 결과물 출력 디렉토리 설정
      emptyOutDir: true, // 기존 빌드 파일 삭제
      cssCodeSplit: true, // css 파일 분할하지 않음
      minify: true, // 빌드 결과물 압축하지 않음
      sourcemap: false, // 소스맵 활성화
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@images': fileURLToPath(new URL('./src/assets/images', import.meta.url))
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use '@/assets/styles/mixins' as *;`,
          quietDeps: true,
          api: 'modern'
        }
      }
    },
  }
})
