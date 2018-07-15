 const typeHandle ={
    '[object Array]': () => 'Array',
    '[object String]': () => 'Value',
    '[object Object]': () => 'Object',
    '[object Number]': () => 'Value',
}

const getType = (item) => Object.prototype.toString.call(item);
const typeCheck = (item) => typeHandle[getType(item)]();

module.exports = typeCheck;