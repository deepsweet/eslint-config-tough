module.exports = {
    // https://github.com/babel/babel-eslint
    parser: 'babel-eslint',
    //
    plugins: [ 'babel', 'import', 'fp' ],
    parserOptions: {
        ecmaVersion: 7,
        sourceType: 'module'
    },
    env: {
        es6: true
    },
    rules: {
        // http://eslint.org/docs/rules/#ecmascript-6
        strict: [ 2, 'never' ],
        'arrow-parens': [ 2, 'always' ],
        'arrow-spacing': [ 2, { before: true, after: true } ],
        'constructor-super': 1,
        'generator-star-spacing': [ 2, 'before' ],
        'no-class-assign': 2,
        'no-confusing-arrow': 1,
        'no-const-assign': 2,
        'no-dupe-class-members': 2,
        'no-duplicate-imports': [ 2, { includeExports: true } ],
        'no-new-symbol': 2,
        'no-this-before-super': 2,
        'no-useless-computed-key': 2,
        'no-useless-constructor': 2,
        'no-useless-rename': 2,
        'no-var': 2,
        'object-shorthand': [ 2, 'always' ],
        'prefer-arrow-callback': 2,
        'prefer-const': [ 2, { destructuring: 'all' } ],
        //'prefer-reflect': 1,
        'prefer-rest-params': 2,
        'prefer-spread': 2,
        'prefer-template': 2,
        'require-await': 2,
        'require-yield': 2,
        'no-await-in-loop': 2,
        'rest-spread-spacing': [ 2, 'never' ],
        'template-curly-spacing': [ 2, 'never' ],
        'yield-star-spacing': [ 2, 'after' ],

        // https://github.com/babel/eslint-plugin-babel
        'babel/no-invalid-this': 2,

        // https://github.com/benmosher/eslint-plugin-import
        'import/no-unresolved': 2,
        'import/named': 2,
        'import/default': 2,
        'import/no-absolute-path': 2,
        'import/export': 2,
        'import/no-named-as-default': 2,
        'import/no-named-as-default-member': 2,
        'import/no-extraneous-dependencies': [ 2, { peerDependencies: false } ],
        'import/no-mutable-exports': 2,
        'import/no-named-default': 2,
        'import/no-amd': 2,
        'import/first': 2,
        'import/no-duplicates': 2,
        'import/order': 2,
        'import/newline-after-import': 2,
        'import/prefer-default-export': 1,

        // https://github.com/jfmengels/eslint-plugin-fp
        'fp/no-arguments': 2
    },
    settings: {
        'import/extensions': [ '.js', '.jsx' ]
    }
};
