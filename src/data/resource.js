/**
 * Resource
 *
 * @returns <Resource>
 *
 * @author Azmi ŞAHİN
 * @since 2018
 **/
class Resource {

  /**
   * Resource Initalize
   *
   * @example
   *
   * new Resource()
   *
   * @returns <Resource>
   */
  constructor() {

    /// name property
    this.Name = ''

    /// value property
    this.Value = ''

    /// type property
    this.Type = ''

    /// result Resource instance
    return this
  }
}

module.exports = Resource
