// function callback(str) {
//   console.log(str);
// }

// function test(str = "adaasdasd", func) {
//   console.log(str);
//   return func(str);
// }

// test("", callback);

function removeEveryOther(arr) {
  //your code here
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
}

// challenge 1
// console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9]));

const number = (num) => {
  const numLetter = [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];

  return numLetter[num];
};

// console.log(number(5));

const year = (year) => {
  return Math.ceil(year / 100);
};

// console.log(year(2000));

const kuadrat = (arr) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i] ** 2;
  }

  return result;
};

// console.log(kuadrat([1, 2, 2]));

const sumNumbers = (arr) => {
  let result = 0;
  arr.forEach((el) => (result += el));
  return result;
};

// console.log(sumNumbers([1, 5.2, 4, 0, -1]));

function betterThanAverage(classPoints, yourPoints) {
  let sumClassPoints = classPoints.reduce((a, b) => a + b);
  const average = sumClassPoints / classPoints.length;
  return average < yourPoints ? true : false;
  // classPoints.forEach((el) => {
  //   el < yourPoints ? (bool = true) : (bool = false);
  // });
}

// console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));

function removeWhitespace(str) {
  const arr = [1, " ", 3];
  delete arr[0];
  console.log(arr);
  return str.replaceAll(" ", "");
}

// console.log(removeWhitespace("8 j 8   mBliB8g  imjB8B8  jl  B"));

const perfectSquare = (n) => {
  return Number.isInteger(Math.sqrt(n));
};

// console.log(perfectSquare(3));

function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(x * i);
  }
  return z;
}

// console.log(countBy(2, 5));

function getAge(inputString) {
  // return the girl's correct age as an integer. Happy coding :)
  inputString = parseInt(inputString);
  console.log(typeof inputString);
  return inputString + ` years old`;
}

// console.log(getAge("4"));

const XO = (str) => {
  let x = "";
  let o = "";
  // for (let i = 0; i < str.length; i++) {
  //   if()
  // }
};

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    // your code here
    return length * height * width;
  }
}

// console.log(Kata.getVolumeOfCuboid(6, 2, 5));
// console.log(Kata.getVolumeOfCuboid(1, 2, 2));

/* All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals. */

function feast(beast, dish) {
  //your function here
  return (
    beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
  );
}

console.log(feast("great blue heron", "garlic naan"));
console.log(feast("brown bear", "bear claw"));
