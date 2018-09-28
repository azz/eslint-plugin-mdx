# `eslint-plugin-mdx`

[![Travis](https://img.shields.io/travis/azz/eslint-plugin-mdx.svg?style=flat-square)](https://travis-ci.org/azz/eslint-plugin-mdx)
[![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![npm](https://img.shields.io/npm/v/eslint-plugin-mdx.svg?style=flat-square)](https://npmjs.org/eslint-plugin-mdx)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)

> [ESLint](https://eslint.org/) parser for [MDX](https://github.com/mdx-js/mdx)

# Incomplete!

## Install

With `yarn`:

```shellsession
yarn add eslint-plugin-mdx
```

With `npm`:

```shellsession
npm install --save eslint-plugin-mdx
```

## Usage

1. In your ESLint config file, add:


```json
{
  "extends": ["plugin:mdx/recommended"]
}
```

2. Make sure ESLint knows to run on `.mdx` files:


```shellsession
eslint --ext js,mdx .
```
