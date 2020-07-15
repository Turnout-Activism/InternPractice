
import Services from './allServices.js'
import pkg from 'chai'
const assert = pkg.assert;
const expect = pkg.expect;

describe('CommentPractice', function () {
  describe('sumOfNumber', function () {
    it('should return the given object when the result is correct', function () {
      let obj = 15;
      let result = Services.SumOfNumber.sumOfNumber(obj);
      assert.equal(result, 120);

    });
    it('should return expected result when input is negative', function () {
      let obj = -15;
      let result = Services.SumOfNumber.sumOfNumber(obj);
      let expectedResult = -120;
      assert.equal(result, expectedResult);
    });
    it('should handle undefined', function(){
        let obj = 15;
        expect(Services.SumOfNumber.sumOfNumber(obj)).to.be.a('number')

    });
    it('should throw type error', function(){
      let obj = "string";
      expect(() => Services.SumOfNumber.sumOfNumber(obj)).to.throw(TypeError);
    });
    it('should not throw type error', function(){
      let obj = 15;
      expect(() => Services.SumOfNumber.sumOfNumber(obj)).to.not.throw(TypeError);
    });
  });
});