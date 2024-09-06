let text = "are you ok";
let pattern = /ok/gi; 
// let result = pattern.exec(text);
let result = pattern.test(text);



// console.log(result);

if (typeof(Worker) !== "undefined") {
   console.log('supported heen');
  } else {
    console.log('nahiii heen');
  }
