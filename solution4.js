const mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/learnyoumongo'; 
const size = process.argv[2];   
mongo.connect(url, function(err, db) {
  let data =db.db("learnyoumongo");
  data.collection("prices").aggregate([
    { $match: {
      size: size
    }}
  , { $group: {
      _id: 'average'
    , average: {
        $avg: '$price'
      }
    }}
  ]).toArray(function(err, results) {
    if (err) throw err
    if (!results.length) {
      throw new Error('No results found')
    }
    let val = results[0]
    console.log(Number(val.average).toFixed(2))
    db.close()
  })
})