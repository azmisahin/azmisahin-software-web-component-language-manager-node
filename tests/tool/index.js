var log = require('./logger')

/**
 * Test Tool
 *
 * Simple Test Tool
 *
 * @param { function } testFunction Testing object
 *
 * @example
 * var tt = new TestTool()
 *
 * @returns <TestResult>
 *
 * @author Azmi ŞAHİN
 * @version 1.0.0
 * @since 2018
 * */
var TestTool = function () {
  log.WriteLine('\x1b[36m%s\x1b[0m', 'Simple Test Tool')
  log.Write('==================================================')
}

/**
 * Test Suite
* @param {string} description Test description
* @param {any} actual actual any
* @param {any} expected Expected any
* */
TestTool.prototype.Test = function (description, expected, actual) {
  var testResult = actual == expected ? { status: '\x1b[32m%s\x1b[0m', message: 'Success ' } : { status: '\x1b[31m%s\x1b[0m', message: 'Error ' }
  log.WriteLine('\x1b[33m%s\x1b[0m', description)
  log.WriteLine(testResult.status, testResult.message)
  if (testResult.message === 'Error') {
    log.WriteLine('\x1b[36m%s\x1b[0m', 'Expected :' + expected)
    log.WriteLine('\x1b[34m%s\x1b[0m', 'Actual   :' + actual)
  }
  log.Write('--------------------------------------------------')
  return testResult
}

/**
 * Test Tool
 */
var tt = new TestTool()

module.exports = tt
