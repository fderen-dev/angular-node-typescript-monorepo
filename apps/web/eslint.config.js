import tseslint from "typescript-eslint";
import angular from "angular-eslint";
import simpleImportSort from "eslint-plugin-simple-import-sort";

import rootConfig from "../../eslint.config.js";

export default tseslint.config(
  ...rootConfig,
  {
    files: ["**/*.ts"],
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    extends: [...angular.configs.tsRecommended],
    processor: angular.processInlineTemplates,
    settings: {
      "import/resolver": {
        typescript: {
          project: ["tsconfig.json"],
        },
      },
    },
    rules: {
      // imports
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            ["^@angular"],
            ["^rxjs"],
            ["^@core"],
            ["^@angular/material", "^@shared"],
            ["^@assets"],
            [("^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$")],
            ["^.+\\.s?css$"],
          ],
        },
      ],
      "simple-import-sort/exports": "error",
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",
      // angular
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "exp",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "exp",
          style: "kebab-case",
        },
      ],
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {},
  },
);
