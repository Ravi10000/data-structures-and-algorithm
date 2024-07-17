// function fixedEncodeURIComponent(str) {
//   return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
//     return "%" + c.charCodeAt(0).toString(16).toUpperCase();
//   });
// }

const _url = new URL("http://localhost.com");
const searchP = new URLSearchParams();
searchP.append("name", "test");
console.log({searchP: searchP.get("name")});

// console.log({param: _url.searchParams.set("g", true)});
console.log({_url})

const arr = ["a", "aa", "ab", "ca", "ac", "c", "b", "ad","12", 1, 24, 23, 100];

const stringArray = ["Ravi", "Rocky", "Raju", "Rahul", "Ajay", "Vijay", "Jacky"]
stringArray.sort();
console.log({stringArray})