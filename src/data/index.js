/// Resource Model Reference
var Resource = require('./resource')

/**
 * Data
 *
 * @returns <Data>
 *
 * @author Azmi ŞAHİN
 * @since 2018
 **/
class Data {

  /**
   * Data Initalize
   *
   * @example
   *
   * new Data()
   *
   * @returns <Data>
   */
  constructor() {

    /// root property
    this.root = new Resource()

    /// result Data instance
    return this
  }
}

module.exports = Data
