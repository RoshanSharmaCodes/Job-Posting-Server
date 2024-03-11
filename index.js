const express = require("express")
const app = express()
const cors = require("cors")
const port = process.env.PORT || 3000
require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.DB_URL;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    await client.connect();
    
    const db = client.db("job-posting")
    const jobsCollection = db.collection("jobs")

    app.post("/post-job", async(req,res) => {
        const body = req.body;
        body.createAt = new Date()
    })

    app.get("/all-jobs", async(req,res) => {
        const jobs = await jobsCollection.find({}).toArray();
        res.send(jobs)
    })


    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}

run().catch(console.dir);


//midlleware
app.use(express.json())
app.use(cors())


app.get("/",(req,res)=>{
    res.send("Hello Developer")
})


app.listen(port, ()=> {
    console.log("Job Posting Server is ACTIVE!")
})