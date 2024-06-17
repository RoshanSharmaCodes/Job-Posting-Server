const express = require("express")
const app = express()
const cors = require("cors")
const port = process.env.PORT || 3000
require("dotenv").config()
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb")
const userApp = require("./Routes/userRoute")
const commonApp = require("./Routes/commonRoute")
const subscribeApp = require("./Routes/subscribeRoute")
const jobApp = require("./Routes/jobRoutes")
const uri = process.env.DB_URL
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
})

var subsCollection
var profilesCollection
var jobsCollection
async function run() {
  try {
    await client.connect()
    const db = client.db("job-posting")
    await client.db("admin").command({ ping: 1 })
    jobsCollection = db.collection("jobs")
    subsCollection = db.collection("Newsletter")
    profilesCollection = db.collection("Profiles")

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 })
    console.log("Pinged your deployment. You successfully connected to MongoDB!")
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir)

app.use(express.json())

const allowedOrigin = ["https://job-posting-woad.vercel.app","http://localhost:3000"]

// Enable CORS with custom configuration
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true)
        console.log("Origin of API", origin)
      if (allowedOrigin.indexOf(origin) === -1) {
        const msg = "The CORS policy for this site does not allow access from the specified origin."
        return callback(new Error(msg), false)
      }
      return callback(null, true)
    },
  })
)

app.get("/", (req, res) => {
  res.send("Hello Developer")
})

app.use("/User", (req, res, next) => {
  req.profilesCollection = profilesCollection
  userApp(req, res, next)
})

app.use("/Jobs", (req, res, next) => {
  req.jobsCollection = jobsCollection
  req.profilesCollection = profilesCollection
  jobApp(req, res, next)
})
app.use("/Subscribe", (req, res, next) => {
  req.subsCollection = subsCollection // Pass subsCollection to request object
  subscribeApp(req, res, next)
})

app.listen(port, () => {
  console.log("Job Posting Server is ACTIVE!")
})
