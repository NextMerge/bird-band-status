// @ts-check

import globals from "globals";

import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import solid from "eslint-plugin-solid/configs/typescript";
import tseslint from "typescript-eslint";

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    solid,
    eslintConfigPrettier,
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
            globals: {
                ...globals.node,
            },
        },
        rules: {
            eqeqeq: ["warn", "always"],
            curly: "warn",
            "no-console": "warn",
            "no-debugger": "warn",
            "@typescript-eslint/consistent-type-definitions": ["error", "type"],
        },
    }
);
