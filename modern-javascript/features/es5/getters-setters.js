var obj1 = {
  first: 'one',
  last: 'two',
  get full() {
    return this.first + ' ' + this.last;
  },
  set full(value) {
    var temp = value.split(' ');
    this.first = temp[0];
    this.last = temp[1];
  }
};

console.log(obj1.full);
obj1.full = 'test it';
console.log(obj1.full);

// -----

var obj2 = {
  a: 7,
  get b() {
    return this.a + 1;
  },
  set b(x) {
    this.a = x / 2;
  }
};

console.log(obj2.a);
console.log(obj2.b);
obj2.b = 50;
console.log(obj2.a);
