'use strict'

var uzip = require('uzip');

exports.run = function(data, level) {
  return uzip.deflate(data.typed, {
    level: level
  });
}
