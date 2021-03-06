module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 10,
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'import',
  ],
  extends: 'eslint:recommended',
  rules: {

    // best practices
    'block-scoped-var'             : ['warn'],
    'consistent-return'            : ['warn'],
    'curly'                        : ['warn'],
    'default-case'                 : ['warn'],
    'dot-notation'                 : ['warn'],
    'eqeqeq'                       : ['warn'],
    'guard-for-in'                 : ['warn'],
    'no-alert'                     : ['warn'],
    'no-caller'                    : ['warn'],
    'no-div-regex'                 : ['warn'],
    'no-else-return'               : ['warn'],
    'no-eq-null'                   : ['warn'],
    'no-eval'                      : ['warn'],
    'no-extra-bind'                : ['warn'],
    'no-extra-label'               : ['warn'],
    'no-extra-parens'              : ['warn'],
    'no-floating-decimal'          : ['warn'],
    'no-implicit-coercion'         : ['warn'],
    'no-implicit-globals'          : ['warn'],
    'no-implied-eval'              : ['warn'],
    'no-invalid-this'              : ['warn'],
    'no-iterator'                  : ['warn'],
    'no-lone-blocks'               : ['warn'],
    'no-loop-func'                 : ['warn'],
    'no-new'                       : ['warn'],
    'no-new-func'                  : ['warn'],
    'no-new-wrappers'              : ['warn'],
    'no-octal-escape'              : ['warn'],
    'no-param-reassign'            : ['warn'],
    'no-proto'                     : ['warn'],
    'no-return-assign'             : ['warn'],
    'no-return-await'              : ['warn'],
    'no-script-url'                : ['warn'],
    'no-self-compare'              : ['warn'],
    'no-sequences'                 : ['warn'],
    'no-throw-literal'             : ['warn'],
    'no-unmodified-loop-condition' : ['warn'],
    'no-unused-expressions'        : ['warn'],
    'no-useless-call'              : ['warn'],
    'no-useless-concat'            : ['warn'],
    'no-useless-return'            : ['warn'],
    'no-void'                      : ['warn'],
    'no-with'                      : ['warn'],
    'prefer-promise-reject-errors' : ['warn'],
    'radix'                        : ['warn'],
    'require-await'                : ['warn'],
    'vars-on-top'                  : ['warn'],
    'wrap-iife'                    : ['warn'],
    'yoda'                         : ['warn'],

    // variables
    'no-label-var'               : ['warn'],
    'no-shadow'                  : ['error'],
    'no-shadow-restricted-names' : ['error'],
    'no-use-before-define'       : ['error'],

    // CommonJS
    'global-require' : ['warn'],
    'no-new-require' : ['warn'],

    // stylistic
    'array-bracket-spacing'            : ['warn'],
    'block-spacing'                    : ['warn'],
    'brace-style'                      : ['warn'],
    'comma-dangle'                     : ['warn', 'always-multiline'],
    'comma-spacing'                    : ['warn'],
    'comma-style'                      : ['warn'],
    'computed-property-spacing'        : ['warn'],
    'eol-last'                         : ['warn'],
    'func-call-spacing'                : ['warn'],
    'func-style'                       : ['warn', 'declaration', { allowArrowFunctions: true }],
    'implicit-arrow-linebreak'         : ['warn'],
    'indent'                           : ['warn', 2],
    'keyword-spacing'                  : ['warn'],
    'linebreak-style'                  : ['warn'],
    'multiline-comment-style'          : ['warn'],
    'new-cap'                          : ['warn'],
    'new-parens'                       : ['warn'],
    'newline-per-chained-call'         : ['warn'],
    'no-array-constructor'             : ['warn'],
    'no-lonely-if'                     : ['warn'],
    'no-mixed-operators'               : ['warn'],
    'no-negated-condition'             : ['warn'],
    'no-nested-ternary'                : ['warn'],
    'no-new-object'                    : ['warn'],
    'no-tabs'                          : ['warn'],
    'no-trailing-spaces'               : ['warn'],
    'no-underscore-dangle'             : ['warn'],
    'no-unneeded-ternary'              : ['warn'],
    'no-whitespace-before-property'    : ['warn'],
    'nonblock-statement-body-position' : ['warn'],
    'object-curly-newline'             : ['warn', { minProperties: 2 }],
    'object-curly-spacing'             : ['warn', 'always'],
    'object-property-newline'          : ['warn', { allowAllPropertiesOnSameLine: true }],
    'one-var'                          : ['warn'],
    'operator-assignment'              : ['warn'],
    'operator-linebreak'               : ['warn', 'after'],
    'prefer-object-spread'             : ['warn'],
    'quotes'                           : ['warn', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'semi'                             : ['error'],
    'semi-spacing'                     : ['warn'],
    'semi-style'                       : ['warn'],
    'space-before-blocks'              : ['warn'],
    'space-before-function-paren'      : ['warn'],
    'space-in-parens'                  : ['warn'],
    'space-infix-ops'                  : ['warn'],
    'space-unary-ops'                  : ['warn', { words: true }],
    'spaced-comment'                   : ['warn', 'always', { exceptions: ['*']}],
    'switch-colon-spacing'             : ['warn'],
    'template-tag-spacing'             : ['warn'],

    // ES6
    'arrow-body-style'        : ['warn', 'as-needed'],
    'arrow-parens'            : ['warn'],
    'arrow-spacing'           : ['warn'],
    'no-useless-computed-key' : ['warn'],
    'no-useless-constructor'  : ['warn'],
    'no-useless-rename'       : ['warn'],
    'no-var'                  : ['warn'],
    'object-shorthand'        : ['warn'],
    'prefer-arrow-callback'   : ['warn'],
    'prefer-const'            : ['warn'],
    'prefer-destructuring'    : ['warn'],
    'prefer-rest-params'      : ['warn'],
    'prefer-spread'           : ['warn'],
    'prefer-template'         : ['warn'],
    'template-curly-spacing'  : ['warn'],
    'yield-star-spacing'      : ['warn', 'both'],

    // plugin: imports
    'import/first'                    : ['warn'],
    'import/exports-last'             : ['warn'],
    'import/no-duplicates'            : ['warn'],
    'import/order'                    : ['warn'],
    'import/newline-after-import'     : ['warn'],
    'import/no-useless-path-segments' : ['warn'],
    'import/no-absolute-path'         : ['warn'],
  },
};
