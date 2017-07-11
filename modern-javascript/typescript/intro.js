var name: string = 'jen';
var age: number = 23;
var flag: boolean = false;

// name = false; // error

const log = (item: string): string => {
  console.log(item);
  // return false; // error
  return 'hey'; // ok
}

log(2); // error
log('hey'); // hey



// following the same
const names: string[] = [];
// const names = ['name'];

names.push(3); // error
