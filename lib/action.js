'use strict;'
const typeCheck = require('./typeCheck');
const action = {
    Value: (data, key) => data.hasOwnProperty(key)? data[key]: key,
    Array: (data, key) => decrypt(data, key),
    Object: (data, key) => popObj(data, key.o),
}
const popObj = (data, obj) => obj.reduce((val, curr) => val? val[curr] : null, data);
const filter = (data, key) => action[typeCheck(key)](data, key);
const decrypt = (data, [key, ...sy4]) => [key, ...sy4.map(e => filter(data, e))];

module.exports = {
    action,
    popObj,
    filter,
    decrypt
}