//const data = require("../data/users.json");
const { connect } = require("./mongo");
const { ObjectId } = require("mongodb");

const COLLECTION_NAME = "users";

async function collection() {
  const client = await connect();
  return client.db("workout_app").collection(COLLECTION_NAME);
}

async function getUsers() {
  const db = await collection();
  const data = await db.find({}).toArray();
  return { users: data };
}

async function getUser(id) {
  const db = await collection();
  const data = await db.findOne({ _id: new ObjectId(id) });
  return data;
}

async function createUser(user) {
  const db = await collection();
  const add = await db.insertOne(user);
  return user;
}

async function deleteUser(id) {
  const db = await collection();
  const data = await db.deleteOne({ _id: new ObjectId(id) });
  return data;
}

async function seed() {
  const db = await collection();
  db.insertMany(data.users);
  return "success";
}

module.exports = {
  COLLECTION_NAME,
  collection,
  createUser,
  deleteUser,
  getUsers,
  getUser,
  seed,
}; 
