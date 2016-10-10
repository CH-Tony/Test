'use strict';
var assert = require('assert')

var PaginationHelper = require('../lib/assign-3')
describe('分页',function(){
  var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
  it('输入6个元素，每页4个，页数应该为2',function(){
    assert.equal(2,helper.pageCount())
  })
  it('输入6个元素，元素数量应为6',function(){
    assert.equal(6,helper.itemCount())
  })
  it('输入6个元素，每页4个，第1页应为4个，第2页应为2个，第3页无数据，为-1',function(){
    assert.equal(4,helper.pageItemCount(0))
    assert.equal(2,helper.pageItemCount(1))
    assert.equal(-1,helper.pageItemCount(2))
  })
  it('输入6个元素，每页4个，第5个元素应在第2页，第2个元素应在第1页，多于最大元素应返回-1',function(){
    assert.equal(1,helper.pageIndex(5))
    assert.equal(0,helper.pageIndex(2))
    assert.equal(-1,helper.pageIndex(20))
    assert.equal(-1,helper.pageIndex(-10))
  })
})
