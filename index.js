// Generated by CoffeeScript 1.3.3
(function() {
  var xl;

  require("./src/core");

  require("./src/ExcelFormulaUtilities");

  xl = (window && window.excelFormulaUtilities) || excelFormulaUtilities;

  module.exports = {
    getTokens: function(f) {
      return xl.getTokens(f).items;
    },
    formatFormula: function(f, opts) {
      return xl.formatFormula(f, opts);
    },
    formatFormulaHTML: xl.formatFormulaHTML,
    toJavaScript: xl.formula2JavaScript,
    toCSharp: xl.formula2CSharp,
    toPython: xl.formula2Python
  };
}.call(this));
