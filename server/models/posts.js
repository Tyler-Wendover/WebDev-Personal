//const data = require("../data/posts.json");
const { connect } = require("./mongo");
const { ObjectId } = require("mongodb");

const COLLECTION_NAME = "posts";

async function collection() {
  const client = await connect();
  return client.db("workout_app").collection(COLLECTION_NAME);
}

async function getPosts() {
  const db = await collection();
  const data = await db.find({}).toArray();
  return { posts: data };
}

async function getPost(id) {
  const db = await collection();
  const data = await db.findOne({ _id: new ObjectId(id) });
  return data;
}

async function createPost(post) {
  const db = await collection();
  const add = await db.insertOne(post);
  return post;
}

async function deletePost(id) {
  const db = await collection();
  const data = await db.deleteOne({ _id: new ObjectId(id) });
  return data;
}

async function seed() {
  const db = await collection();
  db.insertMany(data.posts);
  return "success";
}

module.exports = {
  COLLECTION_NAME,
  collection,
  createPost,
  deletePost,
  getPosts,
  getPost,
  seed,
};
