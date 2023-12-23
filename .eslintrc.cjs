module.exports = {
	"root": true,
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:vue/vue3-recommended",
        "prettier",
        "plugin:astro/recommended",
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        },
        {
			files: ["*.astro"],
			parser: "astro-eslint-parser",
			parserOptions: {
			parser: "@typescript-eslint/parser",
			extraFileExtensions: [".astro"],
			processor: "astro/client-side-ts",
      },
    ],
    "parser": "vue-eslint-parser",
    "parserOptions": {
		"parser": "@typescript-eslint/parser",
        "ecmaVersion": "latest",
        "sourceType": "module",
        "extraFileExtensions": ['.vue'],
    },
    "plugins": [
        "vue"
    ],
    "rules": {
     "vue/html-self-closing": [
      "error",
      {
        "html": {
          "void": "any"
        }
      }
    ]
    }
}
