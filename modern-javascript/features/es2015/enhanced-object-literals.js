// es2015
var obj = {
  handler: function () {},
  ['prop_' + 42]: 'life'
}
console.log(obj.prop_42); // life

// es5
var obj2 = {
  handler: function() {}
}
obj2['prop_' + 42] = 42;

console.log(obj2.prop_42); // 42

var obj3 = {
  handler: function() {}
}
obj3['prop_' + 42] = 'life';

console.log(obj3.prop_42); // life
