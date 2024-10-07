const a = { 1: "a", 2: "b" };
const b = { 3: "c", 4: "d" };
const d = { 5: "e", 6: "f" };

// const c = Object.assign({}, a, b, d);
const c = { ...a, ...b, ...d, ...['ok','error'] };

console.log(c);

const stds = {
  namee: "Rizwan",
  age: 19,
  namePrint: function () {
    console.log(`${this.namee}, is a name.`);
  },
};
// stds.namePrint()

function namePrint() {
  let namee = "Rizwan Pappu";
  console.log(this);
}

// namePrint()

let printName = () => {
  let namee = "Rizwan Pappu";
  console.log(this);
};

// printName()

// let addTwo = (num1, num2) => num1 + num2;

// console.log(addTwo(10, 20));

const myVal = [1, 2, 4, 5, 6, 7, 8, 9, 10];

//forof
// for (const num of myVal) {
//     console.log(num);
// }

const langs = {
  js: "javascript",
  py: "python",
  cpp: "C++",
};

//forin
// for (const key in langs) {
//   console.log(key, ' -:- ',langs[key] );
// }

const stdNames = ["rizwan", "osama", "khalid"];

//foreach
// stdNames.forEach(function(names){
//     console.log(names);
// })

// stdNames.forEach((names) => {
//     console.log(names);
// })

// stdNames.forEach((names, index, arr) => {
//   console.log(names, ': ' ,index, ' -:- ', arr);
// });

const data = [
  { name: "John Doe", age: 30, city: "New York" },
  { name: "Jane Smith", age: 25, city: "San Francisco" },
  { name: "Peter Jones", age: 40, city: "Chicago" },
];

// data.forEach((users) => {
//   console.log(`user name is ${users.name} , age is ${users.age} & lives in ${users.city} `);
// });

const empAge = [19, 22, 56, 17, 16, 18, 15, 33];
//filter true / false
const Age = empAge.filter((age) => age > 19);

// console.log(Age);

const nums = [19, 22, 56, 17, 16, 18, 15, 33];

let afAd = nums.map((n) => n + 10);
// console.log(afAd);

const cart = [
  {
    prod: "book",
    price: 499,
  },
  {
    prod: "pen",
    price: 25,
  },
  {
    prod: "diary",
    price: 600,
  },{
    prod: "table",
    price: 22000,
  },
];

const pricetoPay = cart.reduce((start, items) => start + items.price , 0);
console.log(pricetoPay);
