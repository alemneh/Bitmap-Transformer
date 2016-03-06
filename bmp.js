'use strict';
const fs = require('fs');
var transformBmp = require('./lib/transformer.js');
let bitmap = fs.readFileSync(__dirname + '/' + process.argv[2]);
var buffer = Buffer(bitmap);
let bitmapData = {};

bitmapData.headField = bitmap.toString('ascii', 0, 2);
bitmapData.size = bitmap.readUInt32LE(2);
bitmapData.pixelArrayStart = bitmap.readUInt32LE(10);
bitmapData.paletteColors = bitmap.readUInt32LE(46);



fs.writeFile(__dirname + '/new3.bmp', transformBmp(buffer));
