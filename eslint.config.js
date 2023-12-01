const antfu = require('@antfu/eslint-config').default

const { sortPackageJson, sortTsconfig, perfectionist } = require('@antfu/eslint-config')

module.exports = antfu({
  ...sortPackageJson(),
  ...sortTsconfig(),
  ...perfectionist(),
}, {
  rules: {
    'no-console': 'off',
  },
})
