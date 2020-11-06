'use strict'

var uzip = require('uzip');

exports.run = function(data) {
  return uzip.inflate(data.deflateTyped);
}
