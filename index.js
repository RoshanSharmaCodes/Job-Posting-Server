const express = require("express")
const app = express()
const cors = require("cors")
const port = process.env.PORT || 3000
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
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
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