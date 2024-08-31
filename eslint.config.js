// @ts-check

import globals from "globals";

import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";
// @ts-expect-error idk why we need the extension here
import solid from "eslint-plugin-solid/configs/typescript.js";

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- likely due to the above
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
    }
);
