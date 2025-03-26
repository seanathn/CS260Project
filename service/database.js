const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('user');
const catCollection = db.collection('cat');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  try {
    await db.command({ ping: 1 });
    console.log(`Connect to database`);
  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  }
})();

function getUser(email) {
  console.log("getUser");
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  console.log("getUserBy");
  return userCollection.findOne({ token: token });
}

async function addUser(user) {
  console.log("addUser");
  await userCollection.insertOne(user);
}

async function updateUser(user) {
  console.log("updateUser");
  await userCollection.updateOne({ email: user.email }, { $set: user });
}

async function addCat(cat) {
  console.log("addCat");
  return catCollection.insertOne(cat);
}

function getUserCats(user) {
  console.log("getCat");
  const query = { user: { user } };
  // const options = {
  //   sort: { cat: -1 },
  //   limit: 10,
  // };
  const cursor = catCollection.find(query);
  return cursor.toArray();
}

module.exports = {
  getUser,
  getUserByToken,
  addUser,
  updateUser,
  addCat,
  getUserCats,
};
