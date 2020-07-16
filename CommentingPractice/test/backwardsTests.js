import pkg from 'chai'
const assert = pkg.assert;
const expect = pkg.expect;


import Services from './allServices.js'

describe('CommentPractice', function () {
    describe('backwardsName', function() {
        it('should return the given input when the input is not a string', function(){
            let input = 1; 

            let result = Services.Backwards.backwardsName(input);
            assert.equal(result,input); 
        });
        it('should handle undefined', function(){
            expect(Services.Backwards.backwardsName()).to.be.a('undefined'); 
        })
    });


});