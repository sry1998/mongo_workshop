let mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/learnyoumongo'; 
const firstname = process.argv[2];  
const lastname =  process.argv[3];
let user = {
  firstname: firstname,
  lastname: lastname
}

mongo.connect(url, function(err, db) {
  let data =db.db("learnyoumongo");
  data.collection('docs').insert(user,function(){
    console.log(JSON.stringify(user));
  })
 db.close();
})