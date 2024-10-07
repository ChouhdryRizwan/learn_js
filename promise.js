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


const myPromise = new Promise((resolve, reject) => {
  const success = true; // Simulate success or failure

  if (success) {
    resolve("Operation was successful!"); // Call resolve when the task is successful
  } else {
    reject("Operation failed!"); // Call reject when the task fails
  }
});

myPromise
  .then((message) => {
    console.log("Success:", message);
  })
  .catch((error) => {
    console.error("Error:", error);
  });


  const fetchData = new Promise((resolve, reject) => {
    console.log("Fetching data...");
  
    setTimeout(() => {
      const dataFetched = true; // Simulate data fetching success
  
      if (dataFetched) {
        resolve("Data fetched successfully!"); // Call resolve after 2 seconds
      } else {
        reject("Failed to fetch data!"); // Call reject in case of failure
      }
    }, 2000); // 2 seconds delay
  });
  
  // Handling the Promise
  fetchData
    .then((message) => {
      console.log(message); // Output: Data fetched successfully!
    })
    .catch((error) => {
      console.error(error);
    });

    
    fetchData
  .then((message) => {
    console.log("Success:", message);
  })
  .catch((error) => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("Operation complete!");
  });

