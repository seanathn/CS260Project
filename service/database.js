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
  // console.log("getUser");
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  // console.log("getUserBy");
  return userCollection.findOne({ token: token });
}

async function addUser(user) {
  // console.log("addUser");
  await userCollection.insertOne(user);
}

async function updateUser(user) {
  // console.log("updateUser");
  await userCollection.updateOne({ email: user.email }, { $set: user });
}

async function addCat(newCat) {
  // console.log({user: newCat.user, cats: [{name: newCat.name, symtoms: newCat.symtoms, age: newCat.age, diagnosis: newCat.diagnosis}]});
  return catCollection.insertOne({user: newCat.user, cats: [{name: newCat.name, symtoms: newCat.symtoms, age: newCat.age, diagnosis: newCat.diagnosis}]});
}

async function updateCats(catsArr, user) {
  // console.log(catCollection.find({user:user}));
  return catCollection.updateOne({user: user}, {$set: {cats: catsArr}});
}

async function removeCat(cat) {
  return catCollection.deleteOne(cat);
}

function getUserCats(user) {
  const query = { user: user };
  // console.log(query);
  const cursor = catCollection.find(query);
  // console.log(cursor.toArray());
  return cursor.toArray();
}

module.exports = {
  getUser,
  getUserByToken,
  addUser,
  updateUser,
  addCat,
  removeCat,
  getUserCats,
  updateCats,
};
