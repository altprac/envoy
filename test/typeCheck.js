'use strict';
const expect = require('chai').expect;
const type = require('../lib/typeCheck');
const test = [[[],'Array'],[{},'Object'], [1,'Value'],['a','Value'],[new Date(),'Value'],[false, 'Value']];
/* global it, describe */

describe('Init TypeCheck', () => {
    it('should export a function', () => {
        expect(type).to.be.a('function');
    });
    test.forEach(e =>{
        it(`${Object.prototype.toString.call(e[0])} Should return ${e[1]}` , () =>{
            describe(`Apply ${e[1]}`,()=>{
                expect(type(e[0])).to.equal(e[1]);
            });
        });
    });
});
