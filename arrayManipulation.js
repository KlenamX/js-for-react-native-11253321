function processArray(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num % 2 === 0) {
      newArray.push(num ** 2);
    } else {
      newArray.push(num * 3);
    }
  }
  return newArray;
}

const arr = [5, 6, 1, 6, 12, 14];
const newArray = processArray(arr);
console.log(newArray);
