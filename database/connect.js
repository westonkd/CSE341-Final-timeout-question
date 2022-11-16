require('dotenv').config();
const {MongoClient,ServerApiVersion} = require('mongodb');
const database_string = process.env.DB_CONNECTION_STRING;

let database;

const connectDatabase = async () => {
  if (database) return database;
  try {
    const client = new MongoClient(database_string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverApi: ServerApiVersion.v1,
    });

    await client.connect();
    console.log(`Connected successfully to ${process.env.DB_NAME}`);
    database = client.db(process.env.DB_NAME);
    await database.command({ ping: 1 });
    console.log("Connected successfully to server");
    
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
    return database;
  }

  // } catch (error) {
  //   console.error("Error connecting to DB", error);
  // }  if (!database) {
  //   throw Error('There was an error when connecting to the database.');
  // }
};

// (callback) => {
//   if (database) {
//     console.log('Database has been connected successfully.');
//     return callback(null, database);
//   }
//   MongoClient.connect(database_string)
//     .then((client) => {
//       database = client;
//       callback(null, database);
//     })
//     .catch((err) => {
//       callback(err);
//     });
// };

// const fetchDb = () => {
//   if (!database) {
//     throw Error('There was an error when connecting to the database.');
//   }
//   return database;
// };

module.exports = connectDatabase;
