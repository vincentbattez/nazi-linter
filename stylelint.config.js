module.exports = {
  syntax: 'scss',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order', // order css class
    'stylelint-config-prettier'
  ],

  rules: {
    // stylelint rules
    'string-quotes': 'single',
    'no-duplicate-selectors': true,
    'color-hex-case': 'upper',
    'selector-combinator-space-after': 'always',
    'selector-attribute-quotes': 'always',
    'declaration-block-trailing-semicolon': 'always',
    'declaration-no-important': true,
    'declaration-colon-space-before': 'never',
    'declaration-colon-space-after': 'always',
    'number-leading-zero': 'never',
    'function-url-quotes': 'always',
    'font-weight-notation': 'numeric',
    'comment-whitespace-inside': 'always',
    'rule-empty-line-before': 'always-multi-line',
    'selector-pseudo-element-colon-notation': 'single',
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-before': 'always',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-colon-space-before': 'never',
    'media-feature-colon-space-after': 'always',
    'at-rule-empty-line-before': null,
    'at-rule-no-unknown': null,
    // scss rules
    'scss/at-rule-no-unknown': true,
    'scss/at-extend-no-missing-placeholder': true,
    'scss/selector-no-redundant-nesting-selector': true
  },

  plugins: ['stylelint-scss']
}
