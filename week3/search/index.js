const fs = require("fs");

fs.readFile("file.txt", "utf8", (err, data) => {
  let arg = process.argv[2];
  console.log(data.includes(arg));
});
