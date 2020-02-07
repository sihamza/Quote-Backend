const app = require('express')()
const moment = require('moment');
const admin = require("firebase-admin");
const cors = require('cors') ;
const serviceAccount = require("./level-facility-247411-firebase-adminsdk-xpf87-92353f8b85.json");
const port  = process.env.PORT || 8080

app.use(cors())

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://level-facility-247411.firebaseio.com"
});

const db = admin.firestore()
const quoteCollection = db.collection('quotes')

const time    = 86400000
var quotes    = []
var current   = 0


quoteCollection.get()
  .then(snapshot => {
    snapshot.forEach(doc => {
      quotes.push(doc.id);
    });
  })
  .catch(err => {
    console.log('Error getting documents', err);
  });


setInterval( () => { current = ( quotes[current+1] ) ? current + 1 : 0 } , time )


app.get('/' ,  ( req , res ) => {
  var now = moment().endOf('day') - moment()
  let quoteDoc = quoteCollection.doc(quotes[current]).get().then( doc => {
    if (!doc.exists) {
      res.json({ code : 404 , message : 'not found'  })
    } else {
      res.json({ code : 200 , message : 'successful' , quote : doc.data()  , timeLeft : now })
    }
  })
})


app.listen(port  , () => {
    console.log(" server is running ");
})
