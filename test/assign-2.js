'use strict';
var assert = require('assert')

var fn = require('../lib/assign-2')

describe('小括号是否闭合',function(){
  it('"(if (zero? x) max (/ 1 x))" is balanced',function(){
    assert.equal(true,fn('(if (zero? x) max (/ 1 x))'))
  })
  it('"I told him ..." is balanced',function(){
    assert.equal(true,fn('I told him (that it\'s not (yet) done).\n(But he wasn\'t listening)'))
  })
  it('":-)" is unbalanced',function(){
    assert.equal(false,fn(':-)'))
  })
  it('"())(" is unbalanced',function(){
    assert.equal(false,fn('())('))
  })
})
