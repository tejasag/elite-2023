const express = require("express");

const app = express();
const port = 3000;

app.get("/number", (req, res) => {
  res.send("Go to /number/:num to check if :num is prime or composite");
});

app.get("/number/:num", (req, res) => {
  let num = parseInt(req.params.num);
  if (num === 1 || num === 0) {
    return res.send(num + " is neither prime nor composite");
  } else if (num < 0) {
    return res.send("Number is negative");
  } else {
    let flag = true;
    let factors = [1];
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        factors.push(i);
        flag = false;
      }
    }
    factors.push(num);
    res.send(
      `The number ${num} is ${
        flag ? "Prime" : `Composite and its factors are ${factors.join(", ")}`
      }`
    );
  }
});

app.listen(port, () => {
  console.log(`🚀 listening on port ${port}`);
});
