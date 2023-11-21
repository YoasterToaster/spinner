let delay = 0;
let spinnerAnimation = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r ', 'hello from spinner1.js... \rheyyy\n'];
  // print the char here
  let array = [1, 2, 3];
  for (let value of spinnerAnimation) {
    setTimeout(() => {
    process.stdout.write(value);
  }, delay += 100) 
  }// <= 1s delay to make it noticeable. Can dial it down later.
