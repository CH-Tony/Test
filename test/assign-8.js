'use strict';
var assert = require('assert')

var lcm = require('../lib/assign-8')

describe('Least Common Multiple 求多个数的最小公倍数(方法参数数量不定,每个参数分配的值都是正整数)', function () {

  it('result should be 2', function () {
    assert.equal(2, lcm(1,2))
  })
  it('result should be 30', function () {
    assert.equal(30, lcm(6,3,5))
  })
  it('result should be 11', function () {
    assert.equal(11, lcm(11))
  })
  it('result should be 0', function () {
    assert.equal(0, lcm(0))
  })
  it('result should be 0', function () {
    assert.equal(0, lcm(undefined))
  })
  it('result should be 3432', function () {
    assert.equal(3432, lcm(13,8,11,12))
  })
})
