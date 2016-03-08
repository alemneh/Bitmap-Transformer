'use strict';

module.exports = function(buff, start, palette, color) {
  if(palette) {//check if palette exist
    for (var i = 54; i < start; i+=3) {
      if (color == 'blue') {
        buff[i] = 255;
      } else if(color == 'green') {
        buff[i + 1] = 255;
      } else if(color == 'red') {
        buff[i + 2] = 255;
      }
    }
  } else {//if no palette exist
    for (var j = 54; j < buff.length; j+=3) {
      if (color == 'blue') {
        buff[j] = 255;
      } else if(color == 'green') {
        buff[j + 1] = 255;
      } else if(color == 'red') {
        buff[j + 2] = 255;
      }
    }
  }
  return buff;// returns transformed bmp
};
