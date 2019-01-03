/// Data Model Reference
var Data = require('./data')

/// Data Resource Model Reference
var Resource = require('./data/resource')

/// File Management Reference
var FileManagement = require('file-management-simple')

/**
 * Language Manager
 *
 * @example
 * var l = new LanguageManager()
 *
 * @returns <LanguageManager>
 *
 * @author Azmi ŞAHİN
 * @since 2018
 **/
class LanguageManager {

  /**
   * Language Manager Initalize
   *
   * @example
   *
   * /// Test object
   * var l = new LanguageManager()
   * // Resource Type format
   * .setType(LanguageManager.ResourceType.Json)
   * // Resource file folder
   * .setPath('tests/resource')
   * // Resource language code
   * .setLang('en-us')
   *
   * /// Test criterion
   * var expected = 'Language Manager'
   * var actual = l.Val('app.name')
   *
   * @returns <LanguageManager>
   */
  constructor() {

    /// Name property
    this.Name = 'language-manager'

    /// File Management
    this.FileManagement = new FileManagement()

    /// result LanguageManager instance
    return this
  }

  /**
   * Language Manager Resource Types
   *
   * @returns enum
   */
  static get ResourceType() {
    return {
      Json: 'json'
    }
  }
}

/**
 * Language Code
 *
 * @param {string} resourceLang Language Code
 *
 * @returns <LanguageManager>
 */
LanguageManager.prototype.setLang = function (resourceLang) {

  /// Lang property
  this.Lang = resourceLang

  /// result LanguageManager instance
  return this
}

/**
 * Language path base
 *
 * @param {string} resourceType base path
 *
 * @returns <LanguageManager>
 */
LanguageManager.prototype.setPath = function (resourcePath) {

  /// Path property
  this.Path = resourcePath

  /// result LanguageManager instance
  return this
}

LanguageManager.prototype.FullPath = function () {

  /// result Full Path string
  return `${this.Path}/${this.Type}/${this.Lang}.${this.Type}`
}

/**
 * Language resource type
 *
 * @param {string} resourceType resource type
 *
 * @returns <LanguageManager>
 */
LanguageManager.prototype.setType = function (resourceType) {

  /// Type property
  this.Type = resourceType

  /// result LanguageManager instance
  return this
}

/**
 * List All Data
 *
 * @returns <Resource>
 * */
LanguageManager.prototype.List = function () {

  /// All resource data
  this.Resources = new Data()

  /// Resource file type
  switch (this.Type) {

  /// Resource Type `json`
  case LanguageManager.ResourceType.Json:

    // Define File Information
    this.FileInfo = this.FileManagement
      .setFile(this.FullPath())
      .File

    // Resource json
    this.Resources = this.FileInfo.ToJson()

    break

  /// Resource Type Undefine
  default:

    // Define File
    this.FileInfo = this.FileManagement
      .setFile(this.FullPath())
      .File

    // Resource Json Default
    this.Resources = this.FileInfo.ToJson()

    break
  }

  /// result LanguageManager instance
  return this
}

/**
 * Search value with Name
 *
 * @param {string} name Resouce `Name`
 *
 * @returns <Resource> item
 */
LanguageManager.prototype.Search = function (name) {

  /// Default model
  var result = new Resource()

  /// Search in data
  this.Resources.root.data.forEach(item => {

    // Key found
    if (item.name === name) {

      // resource model item
      result.Name = item.name
      result.Value = item.value
      result.Type = item.type
    }
  })

  /// result Resource model
  return result
}

/**
 * Get resource item with name
 *
 * @param {string} name Resouce `Name`
 *
 * @returns <Resource> item
 */
LanguageManager.prototype.Get = function (name) {

  /// Resource initalize
  this.List()

  /// Search in data
  var result = this.Search(name)

  /// result Resource model
  return result
}

/**
 * Get value with name
 *
 * @param {string} name Resouce `Name`
 *
 * @returns string
 */
LanguageManager.prototype.Val = function (name) {

  /// get in data
  var result = this.Get(name)

  /// result Resource model.`Value`
  return result.Value
}

module.exports = LanguageManager
