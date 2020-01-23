let mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/learnyoumongo'; 
const dbName = process.argv[2];  
mongo.connect(url, function(err, db) {
  let data =db.db(dbName);
  data.collection('users').update({
    username: "tinatime"
  },{
    $set: {
      age: 40
    }
  },function(err){
    if (err) throw err;
   })
 db.close();
})