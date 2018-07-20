'use strict';
const expect = require('chai').expect;
const decrypt = require('../index');
const data = require('./data/data');
const sy4 = require('./data/sy4');
/* global it, describe */

describe('Init Envoy', () => {
    it('envoy should export a function', () => {
        expect(decrypt).to.be.a('function');
    });
    it(`${JSON.stringify(sy4)} Should return [ '+', [ '-', 10, 1, 2, 20 ], [ '*', 10, 20 ], 0, null ]` , () =>{
        describe(`Apply ${JSON.stringify(data)}`,()=>{
            expect((decrypt(data, sy4))).to.eql([ '+', [ '-', 10, 1, 2, 20 ], [ '*', 10, 20 ], 0, null ]);
        });
    });
});

