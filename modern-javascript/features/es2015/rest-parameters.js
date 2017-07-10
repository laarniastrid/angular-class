printArguments(1, 2, 3);

function printArguments(...args) {
  args.forEach(function(arg) {
    console.log('rest args:', arg)
  })
}

printObjects(
  'hello',
  {name: 'PatrickJS'},
  {name: 'Scott'},
  {name: 'Mike'}
)

function printObjects(prefix, ...args) {
  args.forEach(function(arg) {
    console.log(prefix, arg);
  })
}
