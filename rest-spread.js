const filterOutOdds2 = (...nums) => {
    return nums.filter((digit) => digit % 2 === 0 )}

function findMin(...nums){
    return nums.reduce((min, currVal) => (currVal < min ? currVal : min))
} 

function mergeObjects(obj1,obj2){
    return {...obj1, ...obj2}
}

function doubleAndReturnArgs(arr,...nums){
    let x = [...arr,...nums];
    return x.map((number)=>(number * 2))
}

/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
let newArr = [...items];
let x = Math.round(Math.random()*(newArr.length-1));
newArr.splice(x,1);
return newArr;
}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
return [...array1,...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
let newObj = {...obj};
console.log(newObj)
newObj[key] = val;
return newObj;
}


/** Return a new object with a key removed. */

function removeKey(obj, key) {
const newObj = {...obj};
delete newObj[key]
return newObj;
}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
return {...obj1,...obj2}
}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
let obj1 = {...obj};
obj1[key] = val;
return obj1;
}