
import pkg from 'chai'
const assert = pkg.assert;
const expect = pkg.expect;
import Template from '../model/template.js';

describe('CommentPractice', function () {
    describe('template', function() {
        it('should print out a group member based on their team object', function(){
            let template = new Template("Martin", "Person");
            assert.equal(template.seeGroup(), "Firebase");
        });
    });
});