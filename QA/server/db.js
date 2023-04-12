// DB Connection File
const mongoose = require('mongoose');

const connectionUrl = 'mongodb+srv://darshan_nagesh:gr4KM2H57XIWTqbX@cluster0.x9g04kg.mongodb.net/?retryWrites=true&w=majority'

async function connectToMongo() {
  try {
    await mongoose.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected successfully!');
  } catch (err) {
    console.error('MongoDB connection failed:', err);
  }
}

module.exports = connectToMongo;