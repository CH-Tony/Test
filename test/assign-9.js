'use strict';
var assert = require('assert')

var shiftZeros = require('../lib/assign-9')

describe('移动0到数组最后,包括"0".注意0的移动顺序. \n实现条件1:不允许使用中间数组做传递.\n实现条件2:不允许使用任何Array.prototype的function,例如shift, sort, reduce 等', function () {
  var testArrays  = {
    arr1: [1, 0, 2, 3, 0, 0, 7],
    arr2: [0, 2, 8, 0, 0, 12, 33, 0, 0],
    arr3: [1, 0, 0, 0, 0, 0, 0, 0, 1],
    arr4: [1, 0, 0, 0, 0, 0, 0, 0],
    arr5: [0, 0, 0, 0, 0, 0, 0, 0, 1],
    arr6: [1, true, false, 0, null,"0", null, "0", 3],
    arr7: ["0", 0, 0, "0", null, "0", 0, null, 0.5, 0.3, 1],
    arr8: [{ "a": ["code"] }],
    arr9: [1, 0, { "a": ["code"] }, { "b": ["hh"] }]
  };
  var testAnswers = ['[1,2,3,7,0,0,0]',
    '[2,8,12,33,0,0,0,0,0]',
    '[1,1,0,0,0,0,0,0,0]',
    '[1,0,0,0,0,0,0,0]',
    '[1,0,0,0,0,0,0,0,0]',
    '[1,true,false,null,null,3,0,"0","0"]',
    '[null,null,0.5,0.3,1,"0",0,0,"0","0",0]',
    '[{"a":["code"]}]',
    '[1,{"a":["code"]},{"b":["hh"]},0]'
  ]
  Object.keys(testArrays).forEach(function (e, i) {
    it('result should be ' + testAnswers[i], function () {
      assert.equal(testAnswers[i], JSON.stringify(shiftZeros(testArrays[e])));
    })
  })

})
