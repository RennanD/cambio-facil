import config from '@rocketseat/eslint-config/node.mjs'

export default [
  ...config,
  {
    rules: {
      '@stylistic/max-len': 'off',
      camelcase: 'off',
    },
  },
]
