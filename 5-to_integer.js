const args = process.argv.slice(2);
const num = parseInt(args[0], 10);

if (!isNaN(num) && args[0] !== undefined && num.toString() === args[0].trim()) {
  console.log(`My number: ${num}`);
} else {
  console.log("Not a number");
}
