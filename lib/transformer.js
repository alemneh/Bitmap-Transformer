'use strict';

module.exports = function(buff) {
  for (var i = 54; i < buff.length; i++) {
    buff[i] = 2 * buff[i];
    if (buff[i] > 255) {
      buff[i] = 255;
    }
  }
  return buff;
};
