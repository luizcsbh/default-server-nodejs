export default [
    {
      ignores: ["node_modules/", "dist/", "build/"], // Ignorar essas pastas
    },
    {
      files: ["**/*.js"], // Aplicar regras a todos os arquivos .js
      languageOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      rules: {
        "no-unused-vars": "warn", // Avisar sobre variáveis não usadas
        "no-console": "off", // Permitir console.log
      },
    },
  ];
  