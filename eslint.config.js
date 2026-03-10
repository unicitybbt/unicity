import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default defineConfig([
  {
    name: 'app/files-to-lint',
    files: ['**/*.{vue,js,mjs,jsx}'],
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],

  {
    settings: {
      'import/resolver': {
        alias: {
          map: [
            ['@', './src'],
            ['@images', './src/assets/images'], // 이 줄을 추가!
          ],
          extensions: ['.js', '.vue', '.json', '.jpg', '.png', '.svg'], // 이미지 확장자도 추가!
        },
      },
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      'vue/multi-word-component-names': 'off' // 일단 파일명 멀티처리 제거
    }
  },

  skipFormatting,
])
