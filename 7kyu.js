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

console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));
