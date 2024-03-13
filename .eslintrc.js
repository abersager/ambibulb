// @ts-check

import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      semi: 'error',
      'require-imports': 'error',
      'comma-dangle': ['error', 'always-multiline'],
      'no-unused-vars': 'error',
      'unused-imports/no-unused-imports': 'error',
    },
  },
)
