
import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginReactRefresh from 'eslint-plugin-react-refresh';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPrettier from 'prettier/@typescript-eslint'
export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    ignores: ["*.css", "*.svg", "*.json", "reportWebVitals.ts"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: Object.fromEntries(
        Object.entries(globals.browser).map(([key, value]) => [key.trim(), value])
      ),
    },
    plugins: {
      'react-hooks': eslintPluginReactHooks,
      'react-refresh': eslintPluginReactRefresh,
      'jsx-a11y': eslintPluginJsxA11y,
      prettier: eslintPluginPrettier, // Correct plugin for Prettier
      react: eslintPluginReact,

    },
    rules: {
      ...eslintPluginReactHooks.configs.recommended.rules, // React Hooks recommended rules
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      // Optionally add recommended rules for other plugins
      ...eslintPluginReact.configs.recommended.rules, // React recommended rules
      ...eslintPluginJsxA11y.configs.recommended.rules, // JSX accessibility recommended rules
      'prettier/prettier': ['error'], 
      'react/react-in-jsx-scope': 'off',
      ...eslintPrettier.config.recommended.rules
    },
    env: {
    jest: true
}
  },
)
