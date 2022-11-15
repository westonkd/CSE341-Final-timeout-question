require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const database_string = process.env.DB_CONNECTION_STRING;

let database;

const connectDatabase = (callback) => {
  if (database) {
    console.log('Database has been connected successfully.');
    return callback(null, database);
  }
  MongoClient.connect(database_string)
    .then((client) => {
      database = client;
      callback(null, database);
    })
    .catch((err) => {
      callback(err);
    });
};

const fetchDb = () => {
  if (!database) {
    throw Error('There was an error when connecting to the database.');
  }
  return database;
};

module.exports = {
  connectDatabase,
  fetchDb,
};
