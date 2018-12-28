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

  /// Default require
  var result= require('../../' + this.File)

  /// Only string result
  result = JSON.stringify(result)

  /// result file content
  return result
}

module.exports = FileManager