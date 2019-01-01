/**
 * File Manager
 *
 * @param { string } path File Path
 *
 * @example
 * var fm = new FileManager()
 *
 * @returns <FileManager>
 *
 * @author Azmi ŞAHİN
 * @since 2018
 **/
class FileManager {

  /**
   * File Manager Initalize
   *
   * @example
   *
   * new FileManager()
   *
   * @returns <FileManager>
   */
  constructor() {

    /// result FileManager instance
    return this
  }
}

/**
 * Set file path
 *
 * @param {string} filename path
 *
 * @returns <FileManager>
 */
FileManager.prototype.setFile = function(path){

  /// File property
  this.File = path

  /// result FileManager instance
  return this
}

/**
 * Get string
 *
 * @returns `string` Returns the contents of the path
 */
FileManager.prototype.GetString = function(){

  /// Require path module
  var path = require('path')

  /// Root application
  this.BaseDir = process.cwd()

  /// Resource Path
  this.ResourcePath = path.join(this.BaseDir, this.File)

  /// Require
  this.FileString = require(`${this.ResourcePath}`)

  /// Only string result
  var result = JSON.stringify(this.FileString)

  /// result file content
  return result
}

module.exports = FileManager
