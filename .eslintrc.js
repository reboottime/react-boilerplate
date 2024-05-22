/* eslint-env node */
module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:typescript-sort-keys/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  plugins: ['jsx-a11y'],
  root: true,
  // https://stackoverflow.com/questions/55198502/using-eslint-with-typescript-unable-to-resolve-path-to-module
  settings: {
    "@typescript-eslint/parser": [
      ".ts",
      ".tsx"
    ],
    "import/resolver": {
      "alias": {
        "map": [["@ui", "./src/shared/components/ui"]],
        "extensions": [".ts", ".tsx"]
      },
      node: {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      },
      // relies on 
      // 1. eslint-import-resolver-typescript
      // 2. .vscode settings.json
      typescript: {}
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    'additional-rule': 'off',
    'arrow-body-style': 'off',
    'arrow-parens': ['warn', 'always'],
    'eol-last': ['warn', 'always'],
    'import/newline-after-import': [
      'warn',
      {
        count: 1,
      },
    ],
    'max-len': [
      'warn',
      {
        code: 160,
      },
    ],
    'multiline-ternary': ['warn', 'always'],
    'no-console': 'error',
    'import/no-named-as-default': ['off'],
    'import/order': [
      'warn',
      {
        alphabetize: { order: 'asc' },
        'newlines-between': 'always',
        groups: [
          'external',
          'builtin',
          'internal',
          'sibling',
          'parent',
          'index',
        ],
      },
    ],
    indent: ['warn', 2],
    'padding-line-between-statements': [
      'warn',
      {
        blankLine: 'always',
        prev: 'while',
        next: '*',
      },
      {
        blankLine: 'always',
        prev: 'if',
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'if',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'while',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'function',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'for',
      },
      {
        blankLine: 'always',
        prev: 'for',
        next: '*',
      },
    ],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
      },
    ],
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-wrap-multilines': [
      'warn',
      {
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
      },
    ],
    'react-hooks/exhaustive-deps': 'warn',
    'react/no-array-index-key': 'warn',
    'react/react-in-jsx-scope': 'off', // In React 17+, we no long need import React
    'react/jsx-uses-react': 'warn',
    'react/jsx-max-props-per-line': 'warn',
    'react/jsx-sort-props': 'warn',
    '@typescript-eslint/return-await': 'off',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    'sort-imports': [
      'warn',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: true,
      },
    ],
    'typescript-sort-keys/interface': 'warn',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'typescript-sort-keys/string-enum': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/member-ordering': [
      'error',
      { default: ['field', 'constructor', 'signature', 'method'] },
    ],
    '@typescript-eslint/semi': ['warn', 'always'],
    '@typescript-eslint/indent': 'off',
  },
};
