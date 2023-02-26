var num = 4;
// for (var count = 1; count <= num; count++) {
//   console.log(num);
//   num -= 2;
// }

let teks = "";
for (let i = 1; i <= 7; i++) {
  for (let j = 1; j <= i; j++) {
    teks += i;
  }
  teks += "\n";
}

// console.log(teks);

let x = 0;
let y = 1;
function whileMystery(params) {
  while (params > x && params > y) {
    params--;
    x = x + 2;
    y = y + x;
  }
  return x;
}

// console.log(whileMystery(4));

function containBothDigits(a, b, c) {
  let arrayOfA = Array.from(String(a), Number);
  return arrayOfA.includes(b) && arrayOfA.includes(c) ? true : false;
}

// console.log(containBothDigits(433407, 7, 8));

function rockPaperScissors(p1, p2) {
  let paperRockScissors = ["paper", "rock", "scissors"];
  if (p1.toLowerCase() === p2.toLowerCase()) {
    return "TIE";
  } else if (p1.toLowerCase() === paperRockScissors[0]) {
    if (p2.toLowerCase() === paperRockScissors[1]) {
      return "Player 1 wins!";
    } else if (p2.toLowerCase() === paperRockScissors[2]) {
      return "Player 2 wins!";
    }
  } else if (p2.toLowerCase() === paperRockScissors[0]) {
    if (p1.toLowerCase() === paperRockScissors[1]) {
      return "Player 2 wins!";
    } else if (p1.toLowerCase() === paperRockScissors[2]) {
      return "Player 1 wins!";
    }
  }
  // else if (p1.toLowerCase() != "paper" || "rock" || "scissors") {
  //   return "Player 1 Invalid Move" + p1.toLowerCase();
  // } else if (p2.toLowerCase() != ("rock" || "paper" || "scissors")) {
  //   return "Player 2 Invalid Move";
  // }
}
// console.log(rockPaperScissors("scissors", "rock"));

function isPalindrome(params) {
  return (
    params.split("").reverse().join("").replaceAll(" ", "").toLowerCase() ===
    params.replaceAll(" ", "").toLowerCase()
  );
}

// console.log(isPalindrome("Taco cat"));

function switchPairs(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (i % 2 == 1) {
      let temp1 = arr[i - 1];
      let temp2 = arr[i];
      arr[i] = temp1;
      arr[i - 1] = temp2;
    }
  }
  return arr;
}

// console.log(switchPairs([1, 4, 8, -3, 2, 7, 0]));

function longestWord(array) {
  let result = "";
  for (let i = 0; i < array.length; i++) {
    result = array[i];
    if (array[i].length > result.length) {
      result = array[i];
    }
  }
  return result;
}

// console.log(
//   longestWord(["Pikachu", "Entei", "Mew", "Suicune", "Lugia", "Arcanine"])
// );
function isConsecutive(params) {
  let value = 1;
  for (let i = 0; i < params.length; i++) {
    value += 1;
    console.log(value);
    if (params[i + 1] === value) {
      return true;
    } else {
      return false;
    }
  }
}

// console.log(isConsecutive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]));

const personalInfoJson = {
  personal_info: {
    name: "John Smith",
    age: 30,
    gender: "male",
    ocupation: "Software Developer",
  },
};

const walletJSON = {
  wallet: {
    balance: 500,
    transactions: [
      { id: "1", amount: 100 },
      { id: "2", amount: 200 },
      { id: "3", amount: -50 },
    ],
  },
};

const activityJSON = {
  activity: {
    history: [
      { id: "1", type: "purchase", amount: 50, date: "2022-10-20 00:12" },
      { id: "2", type: "deposit", amount: 100, date: "2022-10-2012:10" },
      { id: "3", type: "purchase", amount: 200, date: "2022-10-20 13:15" },
      { id: "4", type: "purchase", amount: 200, date: "2023-01-30 16:40" },
      { id: "5", type: "purchase", amount: 200, date: "2022-10-20 15:55" },
      { id: "6", type: "purchase", amount: 200, date: "2022-10-20 19:00" },
      { id: "7", type: "purchase", amount: 200, date: "2023-01-30 20:00" },
      { id: "8", type: "purchase", amount: 200, date: "2023-01-30 03:00" },
      { id: "9", type: "purchase", amount: 200, date: "2022-10-20 17:30" },
      { id: "10", type: "purchase", amount: 200, date: "2022-10-20 19:00" },
      { id: "11", type: "purchase", amount: 200, date: "2022-01-30 16:00" },
    ],
  },
};

// console.log(personalInfoJson);

const rate = [
  { rating: 4.5 },
  { rating: 4.2 },
  { rating: 4.3 },
  { rating: 4.5 },
  { rating: 4.7 },
];

function topThreeBooks(param) {
  let result = [];
  let sort = param.sort((a, b) => b.rating - a.rating);
  let rating = 0;
  for (let i = 0; i < sort.length; i++) {
    if (result.length < 3) {
      if (sort[i].rating > rating) {
        result.push(sort[i]);
        delete param[i];
      }
    }
  }

  return result;
}

// console.log(topThreeBooks(rate));

const books = [
  { year: 1925, genre: "Fiction" },
  { year: 1960, genre: "Fiction" },
  { year: 1949, genre: "Fiction" },
  { year: 2008, genre: "Gatsby" },
  { year: 1813, genre: "Gatsby" },
  { year: 2018, genre: "Gatsby" },
];

function lastTenYear(param) {
  let result = [];
  let year = new Date().getFullYear();
  for (let i = 0; i < param.length; i++) {
    if (year - param[i].year <= 10) {
      result.push(param[i]);
    }
  }
  return result;
}

// console.log(lastTenYear(books));

function search(param) {
  let result = [];
  books.forEach((book) => {
    if (book.genre.toLowerCase() === param.toLowerCase()) {
      result.push(book);
    }
  });
  return result;
}

// console.log(search("GaTsby"));

let amount = 22;
let slash = "";
let backSlash = "";
for (let i = 0; i < amount; i++) {
  slash += "/";
  backSlash += "\\";
}

// console.log(slash);
// console.log("|| RESPECT THE CURL ||");
// console.log(backSlash);

console.log(8 * 2 - 7 / 4);
