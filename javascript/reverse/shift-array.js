'use strict';
function insertShiftArray(arr, val) {
    console.log(arr, val)
    let mid = Math.ceil(arr.length / 2);
    arr.splice(mid, 0, val);
    return arr;
}


module.exports = insertShiftArray;