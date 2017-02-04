module.exports = {
    plugins: [
        'flowtype'
    ],
    rules: {
        'flowtype/boolean-style': [ 2, 'boolean' ],
        'flowtype/define-flow-type': 1,
        'flowtype/delimiter-dangle': [ 2, 'never' ],
        'flowtype/generic-spacing': [ 2, 'never' ],
        'flowtype/no-weak-types': 1,
        'flowtype/object-type-delimiter': [ 2, 'comma' ],
        'flowtype/require-parameter-type': 1,
        'flowtype/require-return-type': [ 1, 'always', { annotateUndefined: 'always' } ],
        'flowtype/require-valid-file-annotation': 2,
        'flowtype/require-variable-type': [ 2, 'always' ],
        'flowtype/semi': [ 2, 'always' ],
        'flowtype/space-after-type-colon': [ 1, 'always' ],
        'flowtype/space-before-generic-bracket': [ 2, 'never' ],
        'flowtype/space-before-type-colon': [ 2, 'never' ],
        'flowtype/type-id-match': [ 2, '^([A-Z][a-z0-9]+)+$' ],
        'flowtype/union-intersection-spacing': [ 2, 'always' ],
        'flowtype/use-flow-type': 1,
        'flowtype/valid-syntax': 1
    }
};
