const avg = (list) => {
  return list[0] ? (1 / list.length) * list.reduce((a, b) => a + b) : 0;
};

console.log(avg([1, 2, 3, 4]));
console.log(avg([]));
