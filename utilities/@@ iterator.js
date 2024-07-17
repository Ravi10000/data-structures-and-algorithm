const iterable = {
  [Symbol.iterator](){
    let i = 1;
    return {next: ()=>{
      if(i < 10) {return {value: i++, done: false}}
        else{ return {value: undefined, done: true}}
  }}}
};


for (const value of iterable) {
  console.log(value);
}

const generator = {
  *[Symbol.iterator](){
    yield 20;
    yield 25;
    yield 35
  }
}
for (const value of generator) {
  console.log(value);
}

function *genrator2(){
  yield 35;
  yield 24;
  yield 44;
}

const iterate = genrator2();

console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
