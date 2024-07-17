var connection
= indexedDB. open('default', 1)
connection.onsuccess = (e) =>{
var database = e.target.result;
var transaction = database.transaction(['notes']);
var objectStore = transaction.objectStore(['notes']);
var index = objectStore.index('title') ;
var request = index.get("Chrome");
request.onsuccess= (e) => {
console.info(e.target.result);
}
request.onerror = (e) => {
console.error(e.target.result);
};
};