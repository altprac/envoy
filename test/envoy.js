'use strict';
const decrypt = require('../index');
const expect = require('chai').expect;
const data = require('./data/data');
const sy4 = require('./data/sy4')

console.log('data', data);
console.log('sy4',sy4)
const result = decrypt(data, sy4)
console.log(result)
