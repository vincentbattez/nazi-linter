module.exports = {
  "root": true,

  "env": {
    "browser": true,
    "node": true,
    "jest": true
  },

  "parserOptions": {
    "parser": "babel-eslint"
  },

  "extends": [
    "prettier",
    "plugin:vue/strongly-recommended", // vue js linter
    "standard"
  ],

  "plugins": [
    "vue",
    "prettier"
  ],

  "rules": {
    // Eslint rules
    "indent": "error",
    "vue/html-indent": "error",
    "curly": ["error", "all"],
    "brace-style": ["error", "1tbs", {
      "allowSingleLine": false
    }],
    "space-before-function-paren": "off",
    // Vue eslint rules
    "vue/max-attributes-per-line": ["off", {
      "singleline": 20,
      "multiline": {
         "max": 1,
         "allowFirstLine": false
       }
    }],
    "vue/attributes-order": ["error", {
      "order": [
        "DEFINITION",
        "LIST_RENDERING",
        "CONDITIONALS", 
        "RENDER_MODIFIERS",
        "GLOBAL", 
        "UNIQUE", 
        "TWO_WAY_BINDING", 
        "OTHER_DIRECTIVES", 
        "OTHER_ATTR", 
        "EVENTS", 
        "CONTENT"
      ]
    }],
    "vue/order-in-components": ["error", {
      "order": [
        "el",
        "name",
        "parent",
        "functional",
        ["delimiters", "comments"],
        ["components", "directives", "filters"],
        "extends",
        "mixins",
        "inheritAttrs",
        "model",
        ["props", "propsData"],
        "data",
        "computed",
        "watch",
        "LIFECYCLE_HOOKS",
        "methods",
        ["template", "render"],
        "renderError"
      ]
    }],
    "vue/singleline-html-element-content-newline": "off",
    "vue/component-name-in-template-casing": [
      "error",
      "kebab-case"
    ],
    // use prettier inside eslint (rules are inside .prettierrc)
    "prettier/prettier": ["error"]
  }
}