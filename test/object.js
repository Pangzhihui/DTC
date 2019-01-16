const assert = require('chai').assert
const expect = require('chai').expect
const dtc = require('../dist/dtc.umd')

describe('Object', function () {
  describe('merge2', function () {
    const obj1 = {
        name: 'zhangsan',
        list: [12, 22, 34, 55]
      },
      obj2 = {
        age: 22,
        family: {
          father: 'zhang',
          mother: 'li'
        }
      }
    it('should merger two Object', function () {
      expect(dtc.util.merge2({}, obj1, obj2)).to.have.all.keys('name', 'list', 'age', 'family')
    })
  })
})
