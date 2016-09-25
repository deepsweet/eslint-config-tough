[![npm](https://img.shields.io/npm/v/eslint-config-tough.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-tough)

[ESLint Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs).

![tough life](pic.jpg)

## Install

:information_desk_person: This config relies dangerously on npm@3 _flatter_ tree for its dependencies (because of [eslint/issues/3458](https://github.com/eslint/eslint/issues/3458)), so installation _may be_ as simple as:

```sh
npm i -D eslint-config-tough
```

## Usage

```js
// .eslintrc
{
  "extends": [
    "tough/config/common",
    "tough/config/node",
    "tough/config/esnext"
  ],
  "rules": {
    // custom tweaks
  }
}
```

```js
// test/.eslintrc
{
  "extends": [
    "tough/config/test"
  ],
  "rules": {
    // custom tweaks
  }
}
```

### Available configs to extend from

* common
* node
* browser
* esnext
* react
* test
