// Test Tool
var tt = require('./tool')

/**
 * Standart Node Test
 * Instance Test
 */
var DefaultTest = function (){
  var LanguageManager = require('../src')
  var l = new LanguageManager()
  tt.Test('Is the instance initialized?', 'language-manager', l.Name)
}
DefaultTest()

/**
 * Standart Node Test
 * Result Test
 */
var ResultTest = function (){
  var LanguageManager = require('../src')
  var property = 'tr'
  var l = new LanguageManager()
  tt.Test('Instance is the default property true?', property, l.LangCode)
}
ResultTest()

/**
 * Standart Node Test
 * Parameter test
 */
var ParameterTest = function (){
  var LanguageManager = require('../src')
  var property = 'en'
  var l = new LanguageManager(property)
  tt.Test('Instance is the property true?', property, l.LangCode)
}
ParameterTest()
