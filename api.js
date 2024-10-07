// Function to fetch data using Promise
function getUserData(userId) {
    return new Promise((resolve, reject) => {
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("User not found!");
          }
          return response.json();
        })
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }
  
  // Consuming the Promise
  getUserData(1)
    .then((user) => {
      console.log("User Data:", user);
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
    });
  