'use strict'

var fflate = require('fflate');

exports.run = function(data, level) {
  fflate.strFromU8(fflate.zlibSync(
    fflate.strToU8(data.string), {
    level: level
  }));
}
