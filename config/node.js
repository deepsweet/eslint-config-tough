module.exports = {
    env: {
        node: true
    },
    plugins: [ 'node' ],
    rules: {
        'handle-callback-err': 2,
        'no-mixed-requires': [ 2, { grouping: true } ],
        'no-new-require': 2,
        'no-path-concat': 2,
        'no-process-exit': 1,
        'no-sync': 1,

        // https://github.com/mysticatea/eslint-plugin-node
        'node/no-deprecated-api': 2,
        'node/no-missing-require': 2,
        'node/no-unpublished-bin': 2,
        'node/no-unpublished-require': 2,
        'node/process-exit-as-throw': 2,
        'node/shebang': 2
    }
};
