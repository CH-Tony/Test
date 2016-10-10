'use strict';
var assert = require('assert')

var SubstitutionCipher = require('../lib/assign-5')

describe('凯撒加密法', function(){
  var abc1 = "abcdefghijklmnopqrstuvwxyz";
  var abc2 = "etaoinshrdlucmfwypvbgkjqxz";
  var sub = new SubstitutionCipher(abc1, abc2);
  it('input abc should encode to eta', function(){
    assert.equal('eta',sub.encode('abc'))
  })
  it('input xyz should encode to qxz', function(){
    assert.equal('qxz',sub.encode('xyz'))
  })
  it('input aeiou should encode to eirfg', function(){
    assert.equal('eirfg',sub.encode('aeiou'))
  })

  it('input eta should decode to abc', function(){
    assert.equal('abc',sub.decode('eta'))
  })
  it('input qxz should encode to xyz', function(){
    assert.equal('xyz',sub.decode('qxz'))
  })
  it('input eirfg should encode to aeiou', function(){
    assert.equal('aeiou',sub.decode('eirfg'))
  })

})
