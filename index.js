'use strict;'
/*
envoy parses data to populate sy4
["type","param1,"param2"]
["type",{"module",["key","subkey"]},"param2"]
["action", "set|get(default)"]// abbrev:a
*/
const action = require('./lib/action')
console.log('aaaaa',action.decrypt)

module.exports = action.decrypt;