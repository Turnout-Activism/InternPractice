const assert = require('assert'); 
import Template from '../model/template.js';

describe('CommentPractice', function () {
    describe('template', function() {
        it('should print out a group member based on their team object', function(){
            let template = new Template("Martin", "Person");
            assert.equal(template.seeGroup(), "Firebase");
        });
    });
});