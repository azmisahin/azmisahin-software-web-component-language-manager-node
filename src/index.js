/**
 * Language Manager
 *
 * @param { string } langCode Resource Lang Code
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
   * new LanguageManager()
   * new LanguageManager('tr')
   * new LanguageManager('en')
   *
   * @param {string} langCode Language short code
   *
   * @returns <LanguageManager>
   */
  constructor(langCode) {
    this.Name = 'language-manager'
    this.LangCode = langCode ? langCode : 'tr'
    return this
  }
}

module.exports = LanguageManager
