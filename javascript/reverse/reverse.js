function reverseArray(arr) {
  let newArr = [];
  for (let index = arr.length - 1, i = 0; index >= 0; i++, index--) {
    newArr.push(arr[index]);
  }
  return newArr;
}

module.exports = reverseArray;