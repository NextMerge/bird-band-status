import { defineConfig } from "cspell";

export default defineConfig({
  version: "0.2",
  dictionaryDefinitions: [
    {
      name: "project-words",
      path: "./project-words.txt",
      addWords: true,
    },
  ],
  dictionaries: ["project-words"],
  ignorePaths: ["node_modules", "pnpm-lock.yaml", "pnpm-workspace.yaml"],
});
