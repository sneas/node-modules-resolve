# node-modules-resolve

[![travis build](https://img.shields.io/travis/sneas/node-modules-resove.svg?style=flat-square&maxAge=2592000)](https://travis-ci.org/sneas/node-modules-resove)
[![codecov coverage](https://img.shields.io/codecov/c/github/sneas/node-modules-resove.svg?style=flat-square)](https://codecov.io/github/sneas/node-modules-resove)
[![version](https://img.shields.io/npm/v/node-modules-resove.svg?style=flat-square)](http://npm.im/node-modules-resove)
[![downloads](https://img.shields.io/npm/dm/node-modules-resove.svg?style=flat-square)](http://npm-stat.com/charts.html?package=node-modules-resove&from=2015-08-01)
[![MIT License](https://img.shields.io/npm/l/node-modules-resove.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)


Resolve path in `node_modules` folder of the project.

# install
```
npm install node-modules-resolve
```

# usage

```
const nmResolve = require('node-modules-resolve');
const realPath = nmResolve('existing/module');
```