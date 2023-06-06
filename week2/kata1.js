const solution = (arr) => {
  let s = [];
  arr.forEach((x) => {
    x.map((a, i) => (s[i] ? (s[i] += a) : (s[i] = a)));
  });
  return s.join(" ");
};

let eg1 = [
  ["J", "L", "L", "M"],
  ["u", "i", "i", "a"],
  ["s", "v", "f", "n"],
  ["t", "e", "e", ""],
]; // => "Just Live Life Man"

console.log(solution(eg1));

let eg2 = [
  ["T", "M", "i", "t", "p", "o", "t", "c"],
  ["h", "i", "s", "h", "o", "f", "h", "e"],
  ["e", "t", "", "e", "w", "", "e", "l"],
  ["", "o", "", "", "e", "", "", "l"],
  ["", "c", "", "", "r", "", "", ""],
  ["", "h", "", "", "h", "", "", ""],
  ["", "o", "", "", "o", "", "", ""],
  ["", "n", "", "", "u", "", "", ""],
  ["", "d", "", "", "s", "", "", ""],
  ["", "r", "", "", "e", "", "", ""],
  ["", "i", "", "", "", "", "", ""],
  ["", "a", "", "", "", "", "", ""],
]; // => "The Mitochondria is the powerhouse of the cell"
console.log(solution(eg2));
