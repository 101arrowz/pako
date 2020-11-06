'use strict'

var fflate = require('fflate');

exports.run = function(data) {
  return fflate.strFromU8(
    fflate.decompressSync(fflate.strToU8(data.deflateString, true)));
}