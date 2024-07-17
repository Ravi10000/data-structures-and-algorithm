const data = [
{
image: "image_1",
_id: 1
}, 
{
    image: "image_2",
    _id: 2
}, 
{
    image: "image_3",
    _id: 3
}, 
{
    image: "image_4", 
    _id: 4,
    referenceImage : 1
},
{
    image: "image_5", _id: 4,
    referenceImage : 2
},    
{
    image: "image_6", _id: 5,
    referenceImage : 3
},
    {
    image: "image_7",
    _id: 7
},
];

// const comparisonImages = [];
// data.forEach(item => {
//     const reference = data.find(it => item.referenceImage === it._id);
//     if(reference){
//         comparisonImages.push({
//             item, 
//             reference
//         })
//     }
// })

// console.log({comparisonImages})

const dummyData = {
    dependencies: {
        nonconformities: [
            {
            dependencies_conformities_photos: [
                {
                    image: "https://fabiobucketimages.s3.eu-north-1.amazonaws.com/1720180448373_file_1720179025236_file_CAP7056320239521925719.jpg",
                    dateTime: Date.now(),
                    _id: 1
            },
            {
                image: "https://fabiobucketimages.s3.eu-north-1.amazonaws.com/1720180448430_file_1720179025223_file_CAP392617406782197804.jpg",
                dateTime: Date.now(),
                _id: 2
            },
                {
                image: "https://fabiobucketimages.s3.eu-north-1.amazonaws.com/1720180448400_file_1720179025209_file_CAP568917647821143841.jpg",
                dateTime: Date.now(),
                    _id: 3
            },
                  {
                image: "https://fabiobucketimages.s3.eu-north-1.amazonaws.com/1720180448400_file_1720179025209_file_CAP568917647821143841.jpg",
                dateTime: Date.now(),
                      referenceImage: 1,
                      _id: 4
            },
                 {
                image: "https://fabiobucketimages.s3.eu-north-1.amazonaws.com/1720180448430_file_1720179025223_file_CAP392617406782197804.jpg",
                dateTime: Date.now(),
                      referenceImage: 2,
                      _id: 5
            },
                 {
                image: "https://fabiobucketimages.s3.eu-north-1.amazonaws.com/1720180448400_file_1720179025209_file_CAP568917647821143841.jpg",
                dateTime: Date.now(),
                      referenceImage: 3,
                      _id: 6
            },
                                              ]
        }
        ]
    }
}

// https://fabiobucketimages.s3.eu-north-1.amazonaws.com/1720180448430_file_1720179025223_file_CAP392617406782197804.jpg
// https://fabiobucketimages.s3.eu-north-1.amazonaws.com/1720180448400_file_1720179025209_file_CAP568917647821143841.jpg

console.log(dummyData)