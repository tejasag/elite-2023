const last = (arr) => {
  return arr[arr.length - 1] ?? null;
};

console.log(last([1, 2, 3]));
console.log(last([]));
