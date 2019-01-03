# language-manager

The most flexible version of multi-language management. Manages language resources. Makes it easy to switch between different language sources.

## Install

You must first set up nodejs from https://nodejs.org

```shell
$ npm i -g npm
▀ ╢█████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░╟
$ npm i --save language-manager
▀ ╢█████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░╟
```

## Add Resource

Place the file containing the source language definitions in a folder. For example, "tests/resource".

```shell
example.com/                # → Root folder for the project
└── tests/                  # → Tests folder
    └── resource/           # → Resource Folder       .setPath('tests/resource')
        └── json/           # → Resource Type Folder  .setType(LanguageManager.ResourceType.Json)
            ├── en-us.json  # → Resource              language.extention English United States
            └── tr-tr.json  # → Resource              language.extention Turkish Turkey
```

## Sample Resource File

en-us.json

```json
{
  "root": {
    "data": [
      {
        "type": "string",
        "name": "app.name",
        "value": "Language Manager"
      },
      {
        "type": "string",
        "name": "words.ok",
        "value": "Okay"
      }
    ]
  }
}
```

tr-tr.json

```json
{
  "root": {
    "data": [
      {
        "type": "string",
        "name": "app.name",
        "value": "Dil Yöneticisi"
      },
      {
        "type": "string",
        "name": "words.ok",
        "value": "Tamam"
      }
    ]
  }
}
```

## Usage

> main.js

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

## Try

```shell

$ node main

```

> en-us : Language Manager

Change Language

```js
.
..
...

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

## Test

```shell
$ npm run test

> node tests

Simple Test Tool
==================================================
Is the instance initialized?
Success
--------------------------------------------------
Get resource item with name. Simple Zero Configure?
Success
--------------------------------------------------
Get resource item with name. Zero Configure?
Success
--------------------------------------------------
Get resource item with name. Full Configure?
Success
--------------------------------------------------
Get resource item with name. Full Configure TR?
Success
--------------------------------------------------
```

## Pipelines

[![Build Status](https://dev.azure.com/azmisahin-github/azmisahin-software-web-component-language-manager-node/_apis/build/status/azmisahin.azmisahin-software-web-component-language-manager-node?branchName=master)](https://dev.azure.com/azmisahin-github/azmisahin-software-web-component-language-manager-node/_build/latest?definitionId=8?branchName=master)

[![NPM](https://nodei.co/npm/language-manager.png)](https://nodei.co/npm/language-manager/)
