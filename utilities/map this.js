const arr = ["1", "2", "3"];
const obj = {
  "1": "a", 
  "2": "b", 
  "3": "c",
};
const newArr = arr.map((element)=>{
    console.log(this);
  return element;
}, obj)

console.log(newArr)