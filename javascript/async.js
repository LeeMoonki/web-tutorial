const log = cont => {
  console.log(cont);
};

setTimeout(() => { log('async1'); }, 10);
for (let i = 0; i < 10; i++) {
  log(i);
}
setTimeout(() => { log('async2'); }, 0);
log('hi');