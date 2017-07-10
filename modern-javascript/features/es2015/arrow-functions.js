// es5
var object = {
  collection: ['patrick', 'scott', 'mike'],
  domain: 'angularclass.com',
  method: function method() {
    var _this = this;
    return this.collection.map(function(item) {
      return item + '@' + _this.domain;
    })
  }
}

console.log(object.method());

// es2015
let object2 = {
  collection: ['patrick', 'scott', 'mike'],
  domain: 'angularclass.com',
  method: function() {
    return this.collection.map(item => {
      return `${item}@${this.domain}`;
    })
  }
}

console.log(object2.method());

// es2015 
var object3 = {
  collection: ['patrick', 'scott', 'mike'],
  domain: 'angularclass.com',
  method: function method() {
    var mapEmail = function(item) {
      return item + '@' + this.domain;
    }.bind(this);
    return this.collection.map(mapEmail);
  }
}
console.log(object3.method());

// es2015 arrow function
var object3 = {
  collection: ['patrick', 'scott', 'mike'],
  domain: 'angularclass.com',
  method: function method() {
    return this.collection.map(item => {
      return `${item}@${this.domain}`;
    })
  }
}
console.log(object3.method());
