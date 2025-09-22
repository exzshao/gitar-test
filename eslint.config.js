// eslint.config.js
import globals from "globals";
import js from "@eslint/js";

export default [
  // Use the recommended rules from ESLint
  js.configs.recommended,
  
  // Custom configuration object
  {
    languageOptions: {
      globals: {
        ...globals.node // Enable Node.js global variables
      }
    },
    rules: {
        "semi": ["error", "always"] // Enforce semicolons
    }
  }
];
