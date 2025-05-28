const lines = [
  "C is fun",
  "Python is cool",
  "JavaScript is amazing"
];

let i = 0, result = "";
while (i < lines.length) {
  result += lines[i] + (i < lines.length - 1 ? "\n" : "");
  i++;
}

console.log(result);
