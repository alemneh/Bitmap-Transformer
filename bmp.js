'use strict';
const fs = require('fs');
const transformBmp = require('./lib/transformer.js');

let bitmap = fs.readFileSync(__dirname + '/' + process.argv[2]);
var buffer = new Buffer(bitmap);
var palette = bitmap.readUInt32LE(46);
var pixelArrayStart = bitmap.readUInt32LE(10);




fs.writeFile(__dirname + '/paletteColors_bitmap_' + process.argv[3] + '.bmp', transformBmp(buffer, pixelArrayStart, palette, process.argv[3]));
