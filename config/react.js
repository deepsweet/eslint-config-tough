module.exports = {
    ecmaFeatures: {
        jsx: true
    },
    plugins: [
        'react'
    ],
    rules: {
        // https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
        'react/forbid-prop-types': [ 1, { forbid: [ 'any' ] } ],
        'react/no-children-prop': 2,
        'react/no-danger': 1,
        'react/no-danger-with-children': 2,
        'react/no-deprecated': 2,
        'react/no-did-mount-set-state': [ 1, 'disallow-in-func' ],
        'react/no-did-update-set-state': [ 2, 'disallow-in-func' ],
        'react/no-direct-mutation-state': 2,
        'react/no-find-dom-node': 2,
        'react/no-is-mounted': 2,
        'react/no-multi-comp': 2,
        'react/no-render-return-value': 2,
        'react/no-string-refs': 2,
        'react/no-unknown-property': 2,
        'react/no-unused-prop-types': 2,
        'react/prop-types': 2,
        'react/react-in-jsx-scope': 2,
        'react/require-render-return': 2,
        'react/self-closing-comp': [ 2, { component: true, html: true } ],
        'react/sort-comp': [ 2, {
            order: [
                'type-annotations',
                'static-methods',
                'lifecycle',
                'everything-else',
                'render'
            ],
            groups: {
                lifecycle: [
                    'displayName',
                    'propTypes',
                    'contextTypes',
                    'childContextTypes',
                    'mixins',
                    'statics',
                    'defaultProps',
                    'constructor',
                    'getDefaultProps',
                    'getInitialState',
                    'state',
                    'getChildContext',
                    'componentWillMount',
                    'componentDidMount',
                    'componentWillReceiveProps',
                    'shouldComponentUpdate',
                    'componentWillUpdate',
                    'componentDidUpdate',
                    'componentWillUnmount'
                ]
            }
        } ],
        'react/sort-prop-types': [ 2, { callbacksLast: true, requiredFirst: true } ],
        'react/style-prop-object': 2,

        // https://github.com/yannickcr/eslint-plugin-react#jsx-specific-rules
        'react/jsx-boolean-value': [ 2, 'always' ],
        'react/jsx-closing-bracket-location': 2,
        'react/jsx-curly-spacing': [ 2, 'always', { spacing: { objectLiterals: 'never' } } ],
        'react/jsx-equals-spacing': [ 2, 'never' ],
        'react/jsx-filename-extension': 2,
        'react/jsx-first-prop-new-line': [ 2, 'multiline' ],
        'react/jsx-indent': [ 2, 4 ],
        'react/jsx-indent-props': [ 2, 4 ],
        'react/jsx-key': 2,
        'react/jsx-no-bind': 2,
        'react/jsx-no-comment-textnodes': 2,
        'react/jsx-no-duplicate-props': 2,
        'react/jsx-no-undef': 2,
        'react/jsx-pascal-case': 2,
        'react/jsx-sort-props': [ 2, { callbacksLast: true } ],
        'react/jsx-space-before-closing': [ 2, 'always' ],
        'react/jsx-uses-react': 2,
        'react/jsx-uses-vars': 2,
        'react/jsx-wrap-multilines': 2,
        'jsx-quotes': [ 2, 'prefer-double' ]
    }
};
