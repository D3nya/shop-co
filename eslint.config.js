import antfu from "@antfu/eslint-config";

export default antfu({
  type: "app",

  stylistic: {
    indent: 2,
    quotes: "double",
    semi: true,
  },

  typescript: true,
  react: true,

  jsonc: false,
  yaml: false,

  ignores: [
    "README.md",
  ],
});
