'use strict'

var fflate = require('fflate');

exports.run = function(data, level) {
  return fflate.zlibSync(data.typed, {
    level: level
  });
}
