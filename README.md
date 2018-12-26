# language-manager
The most flexible version of multi-language management. Manages language resources. Makes it easy to switch between different language sources.

# Install

```shell
$ npm i -g npm
$ npm i --save language-manager
```

# Usage

```js
/// Language Manager Reference
var LanguageManager = require('language-manager')

/// Test object
var l = new LanguageManager()
  // Resource Type format
  .setType(LanguageManager.ResourceType.Json)
  // Resource file folder
  .setPath('tests/resource')
  // Resource language code
  .setLang('en-us')

/// Expected test result
var expected = 'Language Manager'
/// Actual test result
var actual = l
  // Get resource item value string
  .Val('app.name')

// Test output
console.log(`${l.Lang} : ${actual}`)
```
> en-us : Language Manager

```js
/// Change language
l.setLang('tr-tr')

/// Expected test result
expected = 'Dil Yöneticisi'
/// Actual test result
actual = l
  // Get resource item value string
  .Val('app.name')

// Test output
console.log(`${l.Lang} : ${actual}`)
```
> tr-tr : Dil Yöneticisi


# Test

```shell
$ npm run test
```

# Pipelines
[![Build Status](https://dev.azure.com/azmisahin-github/azmisahin-software-web-component-language-manager-node/_apis/build/status/azmisahin.azmisahin-software-web-component-language-manager-node?branchName=master)](https://dev.azure.com/azmisahin-github/azmisahin-software-web-component-language-manager-node/_build/latest?definitionId=8?branchName=master)

[![NPM](https://nodei.co/npm/language-manager.png)](https://nodei.co/npm/language-manager/)
