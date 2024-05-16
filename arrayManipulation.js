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

// const arr = [5, 6, 1, 6, 12, 14]; this could be an alternative but I decided to do it this way..
const newArray = processArray([8, 7, 6, 13, 16, 19, 20, 17, 23]);
console.log(newArray);

function formatArrayStrings(arrStr, arrNum) {
  const newStrings = [];

  for (let i = 0; i < arrStr.length; i++) {
    let string = arrStr[i];
    let number = arrNum[i];

    if (number % 2 === 0) {
      newStrings.push(string.toUpperCase());
    } else {
      newStrings.push(string.toLowerCase());
    }
  }

  return newStrings;
}

const names = [
  "john",
  "james",
  " jake",
  " drake ",
  "mark",
  "matt",
  "pratt",
  "luke",
  "luka",
];

const newMessage = formatArrayStrings(names, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(newMessage);
