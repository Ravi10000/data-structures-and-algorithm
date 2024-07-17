// const query = "mongoexport --collection=apartments --db=loger --out=apartments.json"
// const collections = [
//   'addresses',
//   'airbookings',
//   'airports',
//   'airtrafics',
//   'books',
//   'cabbookings',
//   'carts',
//   'categories',
//   'cities',
//   'countries',
//   'currencies',
//   'drivers',
//   'enqueries',
//   'flightauths',
//   'flightbookings',
//     'foods',
//     'hotelbookings',
//     'orders',
//     'otps',
//     'restaurants',
//     'transactions',
//     'users'
// ];

// const collections = ["levelptslogs", "nftcontestparticipations", "nftcontests", "nftlogs", "nfts", "rentalagreements", "stakingparticipants", "stakingprograms", "userwallets"];
const collections = ["nftlogs"];

const uri = "mongodb+srv://arpita:SZFWk0CfHReDkQD3@cluster0.pcjxw.mongodb.net/caro"


let query = [];
collections.forEach(collection => {
// query += `mongoimport --collection=${collection} --db=loger --out=${collection}.json && `
    // touch ${collection}.json &
    query.push(`mongoexport --collection=${collection} --uri="${uri}" --query='{eventType: "transfer"}' --out=${collection}.json`);
    // query.push(`mongoimport --collection=${collection} --uri="${uri}" --file=${collection}.json`)
})

console.log(query);