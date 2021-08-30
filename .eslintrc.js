const plugins = ['import', 'promise', 'jsx-a11y']
const pluginsTs = [...plugins, '@typescript-eslint']

const parserOptions = {
  ecmaFeatures: { jsx: true },
  ecmaVersion: 2021,
  sourceType: 'module',
}

module.exports = {
  root: true,
  plugins,
  extends: [
    'eslint:recommended',
    'plugin:import/warnings',
    'plugin:import/errors',
    'plugin:promise/recommended',
    'eslint-config-airbnb',
    'prettier',
  ],
  rules: {},
  parserOptions,
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      plugins: pluginsTs,
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ...parserOptions,
        project: './tsconfig.json',
      },
      extends: [
        'eslint:recommended',
        'plugin:import/warnings',
        'plugin:import/errors',
        'plugin:import/typescript',
        'plugin:promise/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'prettier',
      ],
      rules: {
        'import/prefer-default-export': 'off',
        'import/no-default-export': 'error',
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: ['vite.config.ts'],
          },
        ],
      },
    },
  ],
}
