function XO(str) {
  let x = [];
  let o = [];
  for (let i = 0; i < str.length; i++) {
    str[i].toLowerCase() === "x"
      ? x.push(str[i])
      : str[i].toLowerCase() === "o"
      ? o.push(str[i])
      : "";
  }
  return x.length === o.length;
}

const xo = (str) => {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);

  return o.length === x.length;
};

// console.log(xo("ererXox"));

// const solution = (str, end) => {
//   return str.endsWith(end);
// };

function solution(str, ending) {
  return str.substr(ending.length) === ending;
}
// console.log(solution("abcdef", "de"));

const getDivisorsCnt = (n) => {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
  }
  return count;
};

// console.log(getDivisorsCnt(12));
const longest = (s1, s2) => {
  const sorted = (s1 + s2).split("").sort().join("");
  let result = "";
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === sorted[i + 1]) {
      result += "";
    } else {
      result += sorted[i];
    }
  }
  return result;
  // return sorted;
};

// console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));

const sortByLength = (array) => {
  // return array.filter((word) => word.length > 3);
  return array.sort((a, b) => a.length - b.length);
};

// console.log(sortByLength(["Beg", "Life", "I", "To"]));

/* Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not... */

const friends = (friends) => {
  const result = [];
  for (el of friends) {
    if (el.length === 4) {
      result.push(el);
    }
  }
  return result;
};

// console.log(friends(["Love", "Your", "Face", "1"]));

// sort number descending
const descendingOrder = (n) => {
  const arrInt = Array.from(String(n), (num) => Number(num))
    .sort((a, b) => b - a)
    .toString()
    .replaceAll(",", "");
  return Number(arrInt);
};

console.log(descendingOrder(12341));
