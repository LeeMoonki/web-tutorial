const log = cont => {
  console.log(cont);
};

setTimeout(() => { log('async1'); }, 10);
for (let i = 0; i < 1000; i++) {
  // log(i);
}
log('a')
setTimeout(() => { log('async2'); }, 0);
log('b');
sayFoo();

function foo() {
  for (let i = 0; i < 1000000000; i++) {
    // log(i);
  }
  log('foooo');
}
function sayFoo() {
  foo();
  log('Foo');
}
