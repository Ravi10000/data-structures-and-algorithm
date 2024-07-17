// const query = "mongoexport --collection=apartments --db=loger --out=apartments.json"
const collections = [
  'apartments',
  'bookings',
  'calendars',
  'facilities',
  'hotelrooms',
  'hotels',
  'houserules',
  'legalentities',
  'promotions',
  'properties',
  'reviews',
  'transactions',
  'users',
  'verificationrequests',
  'wishlists'
];


let query = [];
collections.forEach(collection => {
// query += `mongoimport --collection=${collection} --db=loger --out=${collection}.json && `
    query.push(`mongoimport --collection=${collection} --uri="mongodb+srv://arpita:SZFWk0CfHReDkQD3@cluster0.pcjxw.mongodb.net/loger?retryWrites=true&w=majority" --file=${collection}.json`)
})

console.log(query);