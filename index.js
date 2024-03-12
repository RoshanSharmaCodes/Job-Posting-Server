const express = require("express")
const app = express()
const cors = require("cors")
const port = process.env.PORT || 3000
require("dotenv").config()
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb")
const uri = process.env.DB_URL
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
})
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect()
    const db = client.db("job-posting")
    await client.db("admin").command({ ping: 1 })
    const jobsCollection = db.collection("jobs")

    app.post("/post-job", async (req, res) => {
      const body = req.body
      body.createAt = new Date()
      const result = await jobsCollection.insertOne(body)
      if(result.insertedId){
        return res.status(200).send(result)
      }else{
        return res.status(404).send({
          message:"Something went wrong! Not Able to Insert Data",
          status: false
        })
      }
    })

    app.patch("/update-job/:id", async (req, res) => {
      const id = req.params.id
      const data = req.body
      const filter = {_id: new ObjectId(id)}
      const options = {upsert: true}
      const updateDoc  = {
        $set: { ...data }
      }
      const result = await jobsCollection.updateOne(filter, updateDoc, options)
      res.send(result)
    })

    app.get("/all-jobs", async (req, res) => {
      const jobs = await jobsCollection.find({}).toArray()
      res.send(jobs)
    })

    app.get("/edit-job/:id", async (req, res) => {
      const id = req.params.id;
      const job = await jobsCollection.findOne({_id: new ObjectId(id)})
      res.send(job)
    })

    app.get("/my-jobs/:email", async(req,res)=> {
      const jobs = await jobsCollection.find({jobPostedBy: req.params.email}).toArray()
      res.send(jobs)
    })


    app.delete("/job/:id", async(req, res) => {
      var jobId = req.params.id;
      jobId = {_id: new ObjectId(jobId)}
      const result = await jobsCollection.deleteOne(jobId)
      res.send(result)
    })
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
app.use(cors())

app.get("/", (req, res) => {
  res.send("Hello Developer")
})

app.listen(port, () => {
  console.log("Job Posting Server is ACTIVE!")
})
