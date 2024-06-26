export default  {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:@tanstack/eslint-plugin-query/recommended"
  ],
  "overrides": [],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "tsconfigRootDir": __dirname,
    "project": "./tsconfig.json"
  },
  "plugins": ["react", "@typescript-eslint", "@tanstack/query"],
  "rules": {
    // tanstack query
    "@tanstack/query/exhaustive-deps": "error",
    "@tanstack/query/prefer-query-object-syntax": "error",
    // prettier
    "prettier/prettier": [
      "error",
      {},
      {
        "usePrettierrc": true
      }
    ],
    // jsx
    "jsx-a11y/label-has-for": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-quotes": [2, "prefer-double"],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        "components": ["Link"],
        "specialLink": ["as", "to"],
        "aspects": ["noHref", "invalidHref", "preferButton"]
      }
    ],
    // react
    "react/destructuring-assignment": "off",
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "react/state-in-constructor": "off",
    "react/no-unstable-nested-components": "off",
    "semi": ["error", "always"],
    "quotes": [
      "warn",
      "single",
      {
        "avoidEscape": true
      }
    ],
    "@typescript-eslint/no-explicit-any": "off",
    // import
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    "import/order": [
      "warn",
      {
        "groups": [
          ["external", "builtin"],
          "internal",
          ["sibling", "parent"],
          "index"
        ],
        "pathGroups": [
          {
            "pattern": "react",
            "group": "builtin",
            "position": "before"
          },
          {
            "pattern": "@assets/**",
            "group": "internal"
          },
          {
            "pattern": "@components/**",
            "group": "internal"
          },
          {
            "pattern": "@config/**",
            "group": "internal"
          },
          {
            "pattern": "@hooks/**",
            "group": "internal"
          },
          {
            "pattern": "@layouts",
            "group": "internal"
          },
          {
            "pattern": "@layouts/**",
            "group": "internal"
          },
          {
            "pattern": "@pages/**",
            "group": "internal"
          },
          {
            "pattern": "@services/**",
            "group": "internal"
          },
          {
            "pattern": "@utils/**",
            "group": "internal"
          }
        ],
        "pathGroupsExcludedImportTypes": ["react"],
        "newlines-between": "ignore",
        // [ignore|always|always-and-inside-groups|never]
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        }
      }
    ]
  }
}
