'use strict';
const expect = require('chai').expect;
const action = require('../lib/action');
/* global it, describe */

describe('Init Actions', () => {
    it('action should export an object', () => {
        expect(action).to.be.a('object');
    });
    it('action.action should be an object', () => {
        expect(action.action).to.be.a('object');
    });
    it('Value should be a function', () => {
        expect(action.action.Value).to.be.a('function');
    });
    it('Array should be a function', () => {
        expect(action.action.Array).to.be.a('function');
    });
    it('Object should be a function', () => {
        expect(action.action.Object).to.be.a('function');
    }); 
    it('popObj should be a function', () => {
        expect(action.popObj).to.be.a('function');
    });
    it('filter should be a function', () => {
        expect(action.filter).to.be.a('function');
    });
    
    it('decrypt should be a function', () => {
        expect(action.decrypt).to.be.a('function');
    });
});