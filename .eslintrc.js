module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-new': 0,
    'brace-style': 0,
    'arrow-parens': 0,
    'no-return-await': 0,
    'no-return-assign': 0,
    'no-extra-boolean-cast': 0,
    'new-cap': 0,
    'no-use-before-define': 0,
    'no-template-curly-in-string': 0,
    'vue/require-default-prop': 0,
    'vue/require-prop-types': 0,
    'vue/attributes-order': ['error', {
      'order': [
        'CONDITIONALS',
        'GLOBAL',
        'OTHER_ATTR',
        'DEFINITION',
        'LIST_RENDERING',
        'RENDER_MODIFIERS',
        'UNIQUE',
        'BINDING',
        'CONTENT',
        'EVENTS'
      ]
    }],
    'vue/order-in-components': ['error', {
      'order': [
        'el',
        'name',
        'parent',
        'functional',
        ['template', 'render'],
        ['delimiters', 'comments'],
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'data',
        'computed',
        'watch',
        'methods',
        'LIFECYCLE_HOOKS',
        'renderError'
      ]
    }],
    'vue/html-closing-bracket-newline': ['error', {
      'singleline': 'never',
      'multiline': 'never'
    }],
    'vue/html-closing-bracket-spacing': ['error', {
      'startTag': 'never',
      'endTag': 'never',
      'selfClosingTag': 'always'
    }],
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'always',
        'normal': 'always',
        'component': 'always'
      },
      'svg': 'always'
    }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
