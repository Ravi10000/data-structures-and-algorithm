const a = Array(10);
const b = Array.from({ length: 10 });
const c = [...Array(10)];
const d = Array(10).fill();
const e = " ".repeat(10).split("");

console.log({a}); // ❌
a.forEach((_, idx)=>{
    console.log(`a - ${idx}`)
})
console.log({b}); // ✔️
b.forEach((_, idx)=>{
    console.log(`b - ${idx}`)
})
console.log({c}); // ✔️
c.forEach((_, idx)=>{
    console.log(`c - ${idx}`)
})
console.log({d}); // ✔️
d.forEach((_, idx)=>{
    console.log(`d - ${idx}`)
})
console.log({e}); // ✔️
e.forEach((_, idx)=>{
    console.log(`e - ${idx}`)
})