// es5 var
var str = 'hi';
if (true) {
  var str = 'bye'; // gets reassigned
}
console.log(str); // => 'bye'

// es2015 let
let str2 = 'hi';
if (true) {
  let str2 = 'bye'; // is block scoped
}
console.log(str2); // => 'hi'

// es2015 const
const str3 = 'hi';
// if (true) {
//   str3 = 'bye';
// }
console.log(str3); // error

// -----

var day = 'today';
if (true) {
  var day = 'tomorrow';
}
console.log(day);

let newDay = 'today';
if (true) {
  let newDay = 'tomorrow';
}
console.log(day);
