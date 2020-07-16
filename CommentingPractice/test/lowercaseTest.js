import Services from './allServices.js'
import pkg from 'chai'
const assert = pkg.assert;
const expect = pkg.expect;


describe("Comment Practice", function() {
  describe("lowercase", function() {
    it("should return the word with all the letters in lowercase", function () {
      let input = "SMALL";
      let result = Services.Lowercase.lowercase(input);
      assert.equal(result,"small");
    });
    it("should handle undefined", function() {
      expect(Services.Lowercase.lowercase()).to.be.a("undefined");
    });
  });
});  
