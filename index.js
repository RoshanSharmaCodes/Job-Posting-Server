const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
require("dotenv").config();
const { MongoClient } = require('mongodb');
const userApp = require("./Routes/userRoute");
const commonApp = require("./Routes/commonRoute");
const subscribeApp = require("./Routes/subscribeRoute");
const jobApp = require("./Routes/jobRoutes");

// Connection URL
const uri = process.env.DB_CONNECTION_STRING

const client = new MongoClient(uri, {
  serverSelectionTimeoutMS: 30000, // Set timeout to 30 seconds
});
var jobsCollection = {};
var subsCollection = {};
var profilesCollection = {};

async function run() {
  try {
    console.log("Attempting to connect to MongoDB...");
    // Connect the client to the server
    await client.connect();
    console.log("Connected to MongoDB!");

    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    // Get database and collections
    const db = client.db("job-posting");
    jobsCollection = db.collection("jobs");
    subsCollection = db.collection("Newsletter");
    profilesCollection = db.collection("Profiles");

    // console.log("Collection -> ",await jobsCollection)
    // Use the collections as needed
    // e.g., const jobs = await jobsCollection.find({}).toArray();
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
}

run().catch(console.dir);

app.use(express.json());

const allowedOrigin = [
  "https://job-posting-woad.vercel.app",
  "http://localhost:3000",
];

// Enable CORS with custom configuration
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      console.log("Origin of API", origin);
      if (allowedOrigin.indexOf(origin) === -1) {
        const msg =
          "The CORS policy for this site does not allow access from the specified origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

app.get("/", (req, res) => {
  res.send("Hello Developer");
});

app.use("/User", (req, res, next) => {
  req.profilesCollection = profilesCollection;
  userApp(req, res, next);
});

app.use("/Jobs", async (req, res, next) => {
  await run()
  req.jobsCollection = jobsCollection;
  req.profilesCollection = profilesCollection;
  jobApp(req, res, next);
});
app.use("/Subscribe", (req, res, next) => {
  req.subsCollection = subsCollection; // Pass subsCollection to request object
  subscribeApp(req, res, next);
});

app.listen(port, () => {
  console.log("Job Posting Server is ACTIVE!");
});
