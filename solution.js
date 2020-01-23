let mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/learnyoumongo'; 
const age = +process.argv[2];   
mongo.connect(url, function(err, db) {
  let data =db.db("learnyoumongo");
  // find method
  (data.collection('parrots').find({age : {$gt: age}},{projection:{name: 1, age: 1, _id: 0}})).toArray(function(err, documents){
    if(err) throw err;
    console.log(documents);
  })
  //count method
  data.collection('parrots').count({age : {$gt: age}}, function (err,documents){
    if(err) throw err;
    console.log(documents);
  })
 db.close();
})