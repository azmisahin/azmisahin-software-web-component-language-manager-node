/// Test Manager Reference
var TestManager = require('test-management')

/// Test Tool Instance
var tt = new TestManager(true)

/// Test object referance
var LanguageManager = require('../src')

/**
 * Instance Test
 */
var DefaultTest = function () {

  /// Test object
  var instance = new LanguageManager()

  /// Test criterion
  var expected = 'language-manager'
  var actual = instance.Name

  /// Test definition
  tt.Test('Is the instance initialized?', expected, actual)
}
DefaultTest()

/**
 * Get resource item value with name. Simple Zero Configure?
 */
var InstanceApiSimpleZeroTest = function () {

  /// Test object
  var instance = new LanguageManager()
    // Resource Type format
    .setType(LanguageManager.ResourceType.Json)
    // Resource file folder
    .setPath('tests/resource')
    // Resource language code
    .setLang('en-us')

  /// Test criterion
  var expected = 'Language Manager'
  var actual = instance
    // Get resource item value string
    .Val('app.name')

  /// Test definition
  tt.Test('Get resource item with name. Simple Zero Configure?', expected, actual)
}
InstanceApiSimpleZeroTest()

/**
 * Get resource item with name. Zero Configure?
 */
var InstanceApiZeroTest = function () {

  /// Test object
  var instance = new LanguageManager()
    // Resource Type format
    .setType(LanguageManager.ResourceType.Json)
    // Resource file folder
    .setPath('tests/resource')
    // Resource language code
    .setLang('en-us')

  /// Test criterion
  var expected = 'Language Manager'
  var actual = instance
    // Get resource item
    .Get('app.name')
    // item value string
    .Value

  /// Test definition
  tt.Test('Get resource item with name. Zero Configure?', expected, actual)
}
InstanceApiZeroTest()

/**
 * Get resource item with name. Full Configure?
 */
var InstanceApiFullTest = function () {

  /// Test object
  var instance = new LanguageManager()

  /// Test criterion
  var expected = 'Language Manager'
  var actual = instance
    // Resource Type format
    .setType(LanguageManager.ResourceType.Json)
    // Resource file folder
    .setPath('tests/resource')
    // Resource language code
    .setLang('en-us')
    // Get resource item
    .Get('app.name')
    // item value string
    .Value

  /// Test definition
  tt.Test('Get resource item with name. Full Configure?', expected, actual)
}
InstanceApiFullTest()

/**
 * Get resource item  with name. Full Configure TR?
 */
var InstanceApiFullTest_tr = function () {

  /// Test object
  var instance = new LanguageManager()

  /// Test criterion
  var expected = 'Dil Yöneticisi'
  var actual = instance
    // Resource Type format
    .setType(LanguageManager.ResourceType.Json)
    // Resource file folder
    .setPath('tests/resource')
    // Resource language code
    .setLang('tr-tr')
    // Get resource item
    .Get('app.name')
    // item value string
    .Value

  /// Test definition
  tt.Test('Get resource item with name. Full Configure TR?', expected, actual)
}
InstanceApiFullTest_tr()
