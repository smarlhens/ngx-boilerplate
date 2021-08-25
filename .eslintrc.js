module.exports = {
  root: true,
  ignorePatterns: ['projects/**/*'],
  env: {
    browser: true,
    es6: true,
    node: true,
    jasmine: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts'],
      parserOptions: {
        project: ['tsconfig.json'],
        createDefaultProgram: true,
        ecmaVersion: 2018,
        sourceType: 'module',
      },
      extends: ['plugin:@angular-eslint/recommended', 'plugin:@angular-eslint/template/process-inline-templates', 'prettier'],
      rules: {
        '@angular-eslint/component-selector': [
          'error',
          {
            type: 'element',
            prefix: 'app',
            style: 'kebab-case',
          },
        ],
        '@angular-eslint/directive-selector': [
          'error',
          {
            type: 'attribute',
            prefix: 'app',
            style: 'camelCase',
          },
        ],
        quotes: [2, 'single', { allowTemplateLiterals: true }],
        semi: ['error', 'always'],
        'space-before-function-paren': [
          'error',
          {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always',
          },
        ],
        'comma-dangle': ['error', 'only-multiline'],
        'max-len': ['error', { code: 180 }],
        '@typescript-eslint/member-ordering': [
          'warn',
          {
            default: ['signature', 'decorated-field', 'field', 'constructor', 'decorated-method', 'method'],
          },
        ],
      },
    },
    {
      files: ['*.html'],
      extends: ['plugin:@angular-eslint/template/recommended'],
      rules: {},
    },
  ],
};
