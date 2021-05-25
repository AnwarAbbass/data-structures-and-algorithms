'use strict';
function insertShiftArray(arr, val) {
    let mid;
    if (arr.length % 2 === 0) {
        mid = arr.length / 2;
    }
    else {
        mid = arr.length / 2 + 0.5;
    }
    for (let i = 0; i < mid; i--) {
        arr[i] = arr[i - 1];
    }
    arr[mid] = val;
    return arr;
}


module.exports = insertShiftArray;