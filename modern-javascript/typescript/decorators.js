function clean(value: boolean) {
  return function(target) {
    target.cleaned = value;
  }
}

@clean(true)
class Animal {
  open() {
    
  }
}
