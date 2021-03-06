module.exports = {
    plugins: [ 'fp', 'immutable', 'promise' ],
    // http://eslint.org/docs/rules/
    rules: {
        strict: [ 2, 'global' ],
        // Possible Errors
        // http://eslint.org/docs/rules/#possible-errors
        'no-cond-assign': 2,
        'no-console': 1,
        'no-constant-condition': 2,
        'no-control-regex': 1,
        'no-debugger': 2,
        'no-dupe-args': 2,
        'no-dupe-keys': 2,
        'no-duplicate-case': 2,
        'no-empty-character-class': 2,
        'no-empty': 2,
        'no-ex-assign': 2,
        'no-extra-boolean-cast': 2,
        'no-extra-parens': [ 2, 'functions' ],
        'no-extra-semi': 2,
        'no-func-assign': 2,
        'no-inner-declarations': 2,
        'no-invalid-regexp': 2,
        'no-irregular-whitespace': 2,
        'no-obj-calls': 2,
        'no-prototype-builtins': 2,
        'no-regex-spaces': 2,
        'no-sparse-arrays': 2,
        'no-template-curly-in-string': 1,
        'no-unexpected-multiline': 2,
        'no-unreachable': 2,
        'no-unsafe-finally': 2,
        'no-unsafe-negation': 2,
        'use-isnan': 2,
        'valid-typeof': 2,

        // Best Practices
        // http://eslint.org/docs/rules/#best-practices
        'accessor-pairs': 1,
        'array-callback-return': 2,
        'block-scoped-var': 2,
        'class-methods-use-this': 1,
        curly: 2,
        'default-case': 1,
        'dot-location': [ 2, 'property' ],
        'dot-notation': 2,
        eqeqeq: 2,
        'guard-for-in': 1,
        'no-caller': 2,
        'no-case-declarations': 2,
        'no-else-return': 2,
        'no-empty-function': 2,
        'no-empty-pattern': 2,
        'no-eval': 2,
        'no-extend-native': 2,
        'no-extra-bind': 2,
        'no-fallthrough': 2,
        'no-floating-decimal': 2,
        'no-global-assign': 2,
        'no-implicit-coercion': 2,
        'no-implied-eval': 2,
        // 'no-invalid-this': 2,
        'no-iterator': 2,
        'no-labels': 2,
        'no-lone-blocks': 2,
        'no-loop-func': 2,
        'no-magic-numbers': 2,
        'no-multi-spaces': 2,
        'no-multi-str': 2,
        'no-new-func': 2,
        'no-new-wrappers': 2,
        'no-new': 2,
        'no-octal-escape': 2,
        'no-param-reassign': 2,
        'no-proto': 2,
        'no-redeclare': 2,
        'no-return-assign': 2,
        'no-script-url': 2,
        'no-self-assign': 2,
        'no-self-compare': 2,
        'no-sequences': 2,
        'no-throw-literal': 2,
        'no-unused-expressions': 2,
        'no-useless-call': 2,
        'no-useless-concat': 2,
        'no-useless-escape': 2,
        'no-void': 2,
        'no-with': 2,
        radix: [ 2, 'as-needed' ],
        'vars-on-top': 2,
        'wrap-iife': [ 2, 'inside' ],
        yoda: 2,

        // Variables
        // http://eslint.org/docs/rules/#variables
        'init-declarations': 2,
        'no-catch-shadow': 2,
        'no-delete-var': 2,
        'no-label-var': 2,
        'no-shadow': 2,
        'no-undef-init': 2,
        'no-undefined': 2,
        'no-undef': 2,
        'no-unused-vars': [ 2, { ignoreRestSiblings: true } ],
        'no-use-before-define': 2,

        // Stylistic Issues
        // http://eslint.org/docs/rules/#stylistic-issues
        'array-bracket-spacing': [ 2, 'always', {
            singleValue: true,
            objectsInArrays: true,
            arraysInArrays: true
        } ],
        'block-spacing': [ 2, 'always' ],
        'brace-style': [ 2, '1tbs' ],
        camelcase: [ 2, { properties: 'always' } ],
        'comma-dangle': [ 2, 'never' ],
        'comma-spacing': [ 2, { before: false, after: true } ],
        'comma-style': [ 2, 'last' ],
        'computed-property-spacing': [ 2, 'never' ],
        'consistent-this': [ 2, 'that' ],
        'eol-last': 2,
        'func-call-spacing': [ 2, 'never' ],
        'func-style': [ 1, 'expression' ],
        'id-length': [ 2, {
            min: 2,
            exceptions: [ 'x', 'y', 'z', 'e', 'i' ]
        } ],
        indent: [ 2, 2, {
          SwitchCase: 1,
          FunctionDeclaration: {
            parameters: 1
          },
          FunctionExpression: {
            parameters: 1
          },
          CallExpression: {
            arguments: 1
          }
        } ],
		'key-spacing': [ 2, {
            beforeColon: false,
            afterColon: true,
            mode: 'strict'
        } ],
        'keyword-spacing': [ 2, {
            before: true,
            after: true,
            overrides: {
                function: { after: false },
                super: { after: false },
                this: { after: false }
            }
        } ],
        'line-comment-position': [ 2, 'above' ],
        'linebreak-style': [ 2, 'unix' ],
        // 'lines-around-comment'
        'lines-around-directive': [ 2, 'always' ],
        'max-depth': [ 1, { max: 4 } ],
        'max-len': [ 1, 100, 4, {
            ignoreComments: true,
            ignoreRegExpLiterals: true,
            ignoreUrls: true
        } ],
        // 'max-nested-callbacks'
        'max-params': [ 1, { max: 3 } ],
        'max-statements-per-line': [ 2, { max: 1 } ],
        'new-parens': 2,
        'newline-after-var': [ 2, 'always' ],
        'newline-before-return': 2,
        'newline-per-chained-call': [ 2, { ignoreChainWithDepth: 2 } ],
        'no-array-constructor': 2,
        'no-bitwise': 1,
        'no-continue': 2,
        'no-lonely-if': 2,
        'no-mixed-operators': 2,
        'no-mixed-spaces-and-tabs': 2,
        'no-multi-assign': 2,
        'no-multiple-empty-lines': [ 2, { max: 1 } ],
        'no-negated-condition': 2,
        'no-nested-ternary': 2,
        'no-new-object': 2,
        'no-plusplus': 2,
        'no-tabs': 2,
        'no-ternary': 1,
        'no-trailing-spaces': 2,
        'no-underscore-dangle': 2,
        'no-unneeded-ternary': 2,
        'no-whitespace-before-property': 2,
        'object-curly-newline': [ 2, { minProperties: 3, multiline: true } ],
        'object-curly-spacing': [ 2, 'always', { arraysInObjects: true, objectsInObjects: true } ],
        'one-var-declaration-per-line': [ 2, 'always' ],
        'one-var': [ 2, 'never' ],
        'operator-assignment': [ 1, 'always' ],
        'operator-linebreak': [ 2, 'after' ],
        'quote-props': [ 2, 'as-needed' ],
        'quotes': [ 2, 'single' ],
        'semi-spacing': [ 2, { before: false, after: true } ],
        semi: [ 2, 'always' ],
        'space-before-blocks': [ 2, 'always' ],
        'space-before-function-paren': [ 2, 'never' ],
        'space-in-parens': [ 2, 'never' ],
        'space-infix-ops': 2,
        'space-unary-ops': [ 2, { words: true, nonwords: false } ],
        'spaced-comment': [ 2, 'always' ],
        'template-tag-spacing': [ 2, 'never' ],
        'unicode-bom': [ 2, 'never' ],

        // https://github.com/jfmengels/eslint-plugin-fp
        'fp/no-delete': 2,
        'fp/no-loops': 2,

        // https://github.com/jhusain/eslint-plugin-immutable
        'immutable/no-mutation': 2,

        // https://github.com/xjamundx/eslint-plugin-promise
        'promise/always-return': 2,
        'promise/no-return-wrap': 2,
        'promise/param-names': 2
    }
};
