//Check if the Numbers Have Same Last Digit

let first = 8;
let second = 49;
let third = 79;
let result1 = first % 10;
let result2 = second % 10;
let result3 = third % 10;

if (result1 == result2 && result1 == result3) {
  console.log("samelastdigit");
} else {
  console.log("lastdiffdigit");
}
