// console.log("Pehly");

// setTimeout(() => {
//   for (let i = 0; i < 100; i++) {
//     console.log(i);
//   }
// }, 2000);

// console.log("Baad");

// var v = 1;
// let inte = setInterval(() => {
//   console.log(v,"chal raha ha");
//   v += 1;
//   if(v >= 10){
//     clearInterval(inte);
//   }
// }, 1000);

// async function chalo(){
//   return 'Hello';
// }

// chalo().then((message)=>{
//   console.log(message);
// })

async function print() {
  console.log("A");
  await console.log("B");
  console.log("C");
}

// print();
// console.log("D");
// console.log("E");

async function getData() {
  const res = await fetch("https://dummyjson.com/users");
  const data = await res.json();
  return data;
}

// let rec = getData();
// console.log(rec);

getData()
  .then((data) => {
    console.log(data.users[0].firstName);

  })
  .catch((error) => {
    console.log(error);
  });

/*
async function getGit() {
  try {
    const response = await fetch(
      "https://api.github.com/users/ninjaadeveloper"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error is: ", error);
  }
}

getGit();
*/
