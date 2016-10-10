'use strict';
var assert = require('assert')
var fn = require('../lib/assign-1')

describe('统计字符个数',function(){
  it('input="aabbcde", output === "2a2b1c1d1e"',function(){
    assert.equal('2a2b1c1d1e',fn('aabbcde'))
  })
  it('input="wwwbbbw", output === "4w3b"',function(){
    assert.equal('4w3b',fn('wwwbbbw'))
  })
  it('input="performance",output === "1p2e2r1f1o1m1a1n1c"',function(){
    assert.equal('1p2e2r1f1o1m1a1n1c',fn('performance'))
  })
})
