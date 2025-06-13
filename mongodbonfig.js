const mongoose = require('mongoose');

function connectToDatabase() {
  mongoose.connect('mongodb+srv://pavan:pavan100@cluster0.thp2ibc.mongodb.net/form')
  .then(() => {
    console.log('Connected to MongoDB');
  });
}

module.exports = connectToDatabase;

