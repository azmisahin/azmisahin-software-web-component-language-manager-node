/**
 * Parse Manager
 *
 * @example
 * var pm = new ParseManager()
 *
 * @returns <ParseManager>
 *
 * @author Azmi ŞAHİN
 * @since 2018
 **/
class ParseManager {

  /**
   * File Manager Initalize
   *
   * @example
   *
   * new ParseManager()
   *
   * @returns <ParseManager>
   */
  constructor() {

    /// result ParseManager instance
    return this
  }

  /**
   * Set String
   *
   * @param {string} string Parser string
   *
   * @returns <ParseManager>
   */
  setString(string) {

    /// String property
    this.String = string

    /// result ParseManager instance
    return this
  }

  /**
   * Return Json
   */
  GetJson() {

    /// Parse string
    var result = JSON.parse(this.String)

    /// result json object
    return result
  }
}

module.exports = ParseManager
