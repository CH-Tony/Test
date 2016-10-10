'use strict';
var assert = require('assert')

var dispose = require('../lib/assign-7')
var plus = function (a, b) {
  return a + b;
}
var fnA  = dispose(plus)
var fnB  = dispose(console.log)
//例
//dispose = once(console.log)
//dispose("foo") // -> "foo"
//dispose("bar") // -> no effect
describe('once方法中,fn作为一个方法参数传递到fn中 并返回一个新版本的fn方法,使该方法只能被执行一次,第二次或以后的执行都将失效(失效后方法返回undefined)', function () {

  it('functionA call should no problem', function () {
    assert.equal(3, fnA(1, 2))
  })
  it('functionA will be no effect and result should be undefined', function () {
    assert.equal(undefined, fnA(3, 4))
  })

  it('functionB first call should no problem', function () {
    assert.equal(undefined, fnB('c'))
  })

  it('functionB will be no effect and result should be undefined', function () {
    assert.equal(undefined, fnA('d'))
  })
})
