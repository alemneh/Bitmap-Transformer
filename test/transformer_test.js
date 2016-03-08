'use strict';
const expect = require('chai').expect;
const transformer = require('../lib/transformer.js');

describe('transformer', function() {
  it('should max red if transformer is passed red', function() {
    var buff = new Buffer(100);
    buff = transformer(buff, 1087, buff.readUInt32LE(46), 'red');

    expect(buff[56]).to.equal(255);
    expect(buff[59]).to.equal(255);
    expect(buff[62]).to.equal(255);
  });
  it('should max green if transformer is passed green', function() {
    var buff = new Buffer(100);
    buff = transformer(buff, 1087, buff.readUInt32LE(46), 'green');

    expect(buff[55]).to.equal(255);
    expect(buff[58]).to.equal(255);
    expect(buff[61]).to.equal(255);
  });
  it('should max blue if transformer is passed blue', function() {
    var buff = new Buffer(100);
    buff = transformer(buff, 1087, buff.readUInt32LE(46), 'blue');

    expect(buff[54]).to.equal(255);
    expect(buff[57]).to.equal(255);
    expect(buff[60]).to.equal(255);
  });
});
