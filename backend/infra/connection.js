const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/bon_artisans_products")

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
 
db.once('open', () => {
  console.log("Connection Successful!");
});

module.exports = {db}

