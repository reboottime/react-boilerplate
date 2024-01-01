/* eslint-env node */
module.exports = {
  extends: [
    "react-app",
    "react-app/jest",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:typescript-sort-keys/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  plugins: ["@typescript-eslint", "jsx-a11y"],
  root: true,
  // https://stackoverflow.com/questions/55198502/using-eslint-with-typescript-unable-to-resolve-path-to-module
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
    react: {
      version: "detect",
    },
  },
  rules: {
    "additional-rule": "off",
    "arrow-body-style": "off",
    "arrow-parens": ["error", "always"],
    "eol-last": ["error", "always"],
    "import/newline-after-import": [
      "error",
      {
        count: 1,
      },
    ],
    "max-len": [
      "error",
      {
        code: 160,
      },
    ],
    "multiline-ternary": ["error", "always"],
    "no-console": "error",
    "import/no-named-as-default": ["off"],
    "import/order": [
      "error",
      {
        alphabetize: { order: "asc" },
        "newlines-between": "always",
        groups: [
          "external",
          "builtin",
          "internal",
          "sibling",
          "parent",
          "index",
        ],
      },
    ],
    indent: ["error", 2],
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: "while",
        next: "*",
      },
      {
        blankLine: "always",
        prev: "if",
        next: "*",
      },
      {
        blankLine: "always",
        prev: "*",
        next: "if",
      },
      {
        blankLine: "always",
        prev: "*",
        next: "return",
      },
      {
        blankLine: "always",
        prev: "*",
        next: "while",
      },
      {
        blankLine: "always",
        prev: "*",
        next: "function",
      },
      {
        blankLine: "always",
        prev: "*",
        next: "for",
      },
      {
        blankLine: "always",
        prev: "for",
        next: "*",
      },
    ],
    quotes: [
      2,
      "single",
      {
        avoidEscape: true,
      },
    ],
    "react/prop-types": "off",
    "react-hooks/rules-of-hooks": "error",
    "react/jsx-wrap-multilines": [
      "error",
      {
        assignment: "parens-new-line",
        return: "parens-new-line",
        arrow: "parens-new-line",
        condition: "parens-new-line",
        logical: "parens-new-line",
        prop: "parens-new-line",
      },
    ],
    "react-hooks/exhaustive-deps": "warn",
    "react/no-array-index-key": "error",
    "react/react-in-jsx-scope": "off", // In React 17+, we no long need import React
    "react/jsx-uses-react": "error",
    "react/jsx-max-props-per-line": "error",
    "react/jsx-sort-props": "error",
    "@typescript-eslint/return-await": "off",
    "@typescript-eslint/promise-function-async": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "sort-imports": [
      "error",
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        allowSeparatedGroups: true,
      },
    ],
    "typescript-sort-keys/interface": "error",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "typescript-sort-keys/string-enum": "error",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/member-ordering": [
      "error",
      { default: ["field", "constructor", "signature", "method"] },
    ],
    semi: [2, "always"],
    "@typescript-eslint/semi": [2, "always"],
    "@typescript-eslint/indent": "off",
  },
};
