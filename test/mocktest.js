var assert = require('assert');
var expect  = require('chai').expect;
var request = require('request');


it('Should return 200 status', function() {
    request('http://localhost:3000' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);;
        done();
    });
});

it('Should return true for context root /test', function() {
    request('http://localhost:3000/test' , function(error, response, body) {
        expect(body).to.equal('{"status":true}');
        done();
    });
});
