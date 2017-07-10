var dictionary = {
  "yolo": "what you say before doing something crazy",
  "gg": "good game, also used sarcastically when you win",
  "swag": "swag swag"
};

var keys = Object.keys(dictionary);
var upperKeys = keys.map(function(key) {
  return key.toUpperCase();
});

console.log(upperKeys);

// -----

var obj1 = {
  "one": 1, 
  "two": 2,
  "three": 3
};

var obj2 = {
  one: 1, 
  two: 2,
  three: 3
}

// traditional way
for (var key in obj1) {
  if (obj1.hasOwnProperty(key)) {
    console.log(obj1[key]);
  }
};

// object.keys way
var keys = Object.keys(obj1);
var timesTwo = keys.map(function(key) {
  return obj1[key] * 2;
});
console.log(timesTwo);

// keys not wrapped in quotes
var keys2 = Object.keys(obj2);
var newKeys = keys2.map(function(key) {
  return obj2[key] * 3;
});
console.log(keys2);
console.log(newKeys);
