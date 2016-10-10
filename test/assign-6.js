'use strict';
var assert = require('assert')

var getUnUsedKeys = require('../lib/assign-6')

describe('查找未使用的key[0-9]', function(){


  it('result should be 0,4,5,6,7,8,9', function(){
    assert.equal('0,4,5,6,7,8,9',getUnUsedKeys([1,2,3]))
  })
  it('result should be 4,6,8', function(){
    assert.equal('4,6,8',getUnUsedKeys([9,7,1,3,2,5,0]))
  })
  it('result should be 2,3,4,5,6,7,8,9', function(){
    assert.equal('2,3,4,5,6,7,8,9',getUnUsedKeys([1,1,10,-1,0,0,0]))
  })
  it('result should be 0,1,2,3,4,5,6,7,9', function(){
    assert.equal('0,1,2,3,4,5,6,7,9',getUnUsedKeys([NaN,undefined,8,null]))
  })

})
