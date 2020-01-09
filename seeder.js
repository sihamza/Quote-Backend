var request = require('request-promise')

var admin = require("firebase-admin")
const serviceAccount = require("./level-facility-247411-firebase-adminsdk-xpf87-92353f8b85.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://level-facility-247411.firebaseio.com"
})

var db = admin.firestore()
const quoteCollection = db.collection('quotes')

;( async () => {
  var options = {
   method: 'GET' ,
   uri: `https://type.fit/api/quotes` ,
   gzip: true  }

  var quotes = await request(options).then( res => {
    return JSON.parse(res)
  }).catch( err => {
    console.error(err)
  })

  quotes.forEach(elem => {
    quoteCollection.add(elem)
  });


})();
