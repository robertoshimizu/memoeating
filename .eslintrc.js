module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": [
        "plugin:vue/essential",
        'plugin:prettier/recommended',
        '@vue/prettier'

    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "parser": 'babel-eslint'
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "vue/no-multiple-template-root": "off",
        "vue/valid-template-root": "off",
        'vue/experimental-script-setup-vars': "off"
    }
};