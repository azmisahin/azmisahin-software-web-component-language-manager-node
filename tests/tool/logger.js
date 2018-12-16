/**
 * Logger Tool
 *
 * Simple Log Tool
 *
 * @example
 * var log = new Logger()
 *
 * @returns <Logger>
 *
 * @author Azmi ŞAHİN
 * @version 1.0.0
 * @since 2018
 * */
var Logger = function(){
  return this
}

/**
 * @param {string} s String Message
 */
Logger.prototype.Write = function(s){
  console.log(s)
}

/**
 * @param {string} p String Parameter
 * @param {string} s String Message
 */
Logger.prototype.WriteLine = function(p,s){
  console.log(p,s)
}

/**
 * Logger Tool
 */
var log = new Logger()

module.exports = log
