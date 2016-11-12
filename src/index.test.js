var expect = require('chai').expect;
var nmResolve = require('./index.js');

describe('node-modules-resolve', function() {
    it('should resolve existing path', function() {
        expect(nmResolve('chai')).to.not.equal(undefined);
    });

    it('should resolve existing path', function() {
        expect(nmResolve('chai/../chai')).to.not.equal(undefined);
    });

    it('should not resolve unexisting path', function() {
        expect(nmResolve('chai/unexisting')).to.equal(undefined);
    });
});