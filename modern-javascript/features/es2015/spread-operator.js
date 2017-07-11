// es5
var nums = [1, 2, 3];

function addAll(x, y, z) {
  return x + y + z;
}

var val = addAll.apply(this, nums);

console.log(val) // 6

// es6
let nums2 = [1, 2, 3];

function addEverything(x, y, z) {
   return x + y + z;
}

let val2 = addEverything(...nums2);
                               
console.log(val2) // 6

