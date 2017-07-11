//es5
function App() {
  console.log('hello');
}
App.prototype.method = function() {
  console.log('method called');
}

var app = new App();
app.method();

// es2015
class App2 {
  constructor() {
    console.log('hello');
  }
  method() {
    console.log('method called');
  }
}

var app2 = new App2();
app2.method();
