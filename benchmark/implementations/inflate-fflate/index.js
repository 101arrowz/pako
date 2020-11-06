'use strict'

var fflate = require('fflate');

exports.run = function(data) {
  return fflate.decompressSync(data.deflateTyped);
}