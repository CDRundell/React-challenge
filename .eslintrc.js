module.exports = {
    "env": {
      "browser": true,
      "es2021": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "airbnb"
    ],
    "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
        },
      "ecmaVersion": "latest",
      "sourceType": "module"
    },
    "plugins": [
      "react"
    ],
    "rules": {
      "comma-dangle": "off",
      "quotes": "off",
      "arrow-body-style": 0,
      "space-before-function-paren": 0,
      "react/prefer-stateless-function": 0,
      "react/function-component-definition": 0
    },
    "ignorePatterns": ["webpack.config.js", ".eslintrc.js"]
}
