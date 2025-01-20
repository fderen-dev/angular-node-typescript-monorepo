import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import importPlugin from 'eslint-plugin-import';

export default tseslint.config({
  files: ["**/*.ts"],
  extends: [
    eslint.configs.recommended,
    importPlugin.flatConfigs.recommended,
    tseslint.configs.recommended,
    eslintPluginPrettier,
  ],
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
});