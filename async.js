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
