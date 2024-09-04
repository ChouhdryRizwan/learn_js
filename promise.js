function prom(condition) {
  return new Promise(function (myResolve, myReject) {
    console.log("Please wait, Fetching Data");

    setTimeout(() => {
      if (condition) {
        myResolve("Pass");
      } else {
        myReject("Fail");
      }
    }, 3000);
  });
}
prom(true)
  .then(() => {
    console.log("hugya");
  })
  .catch(() => {
    console.log("nahi hua");
  });

// fetch("https://api.github.com/users/ninjaadeveloper")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.log(error));
