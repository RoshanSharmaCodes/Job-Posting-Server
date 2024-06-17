const uuid = require("short-uuid")
const { Router } = require("express")
const userApp = Router()

userApp.get("/Info", (req, res) => {
  var profilesCollection = req.profilesCollection
  const info = {
    firstName: "Roshan",
    lastName: "Sharma",
    mobileNo: "999999999",
    emailId: "abc@gmail.com",
    highestEdu: "Masters",
    highestEduYear: "2022",
    linkedinUrl: "http://www.linkedin.com",
    portfolioUrl: "http://www.linkedin.com",
    description: "I want to be find the new opportunities.",
  }
  res.status(200).json(info)
})

userApp.post("/SignUp", async (req, res) => {
  var profilesCollection = req.profilesCollection
  const body = req.body
  body.createAt = new Date()
  body.userId = "U"+uuid.generate()
  const result = await profilesCollection.insertOne(body)
  if (result.insertedId) {
    return res.status(200).send(result)
  } else {
    return res.status(404).send({
      message: "Something went wrong! Not Able to Insert Data",
      status: false,
    })
  }
})

userApp.post("/Login", async (req, res) => {
  try{
    var profilesCollection = req.profilesCollection
    var email = req.body.emailId
    var password = req.body.password
    var entry = await profilesCollection.findOne({ emailId: email })
    var checkPass = password == entry.password
    if (entry) {
      if (checkPass) {
        res.status(200).send(entry)
      } else {
        res.status(404).send({ message: "Wrong Password for Email Id" })
      }
    } else {
      res.status(404).send({ message: "Entry not found for the provided emailId" })
    }
  } catch(err){
    res.status(500).send({message: err.message})
  }
})

userApp.post("/Save", async (req, res) => {
  var profilesCollection = req.profilesCollection
  const body = req.body
  // Set createAt field to the current date
  body.createAt = new Date()
  try {
    const emailId = body.emailId
    // Check if a document with the provided emailId exists
    const existingUser = await profilesCollection.findOne({ emailId: emailId })
    if (existingUser) {
      // Update the existing document
      const result = await profilesCollection.updateOne(
        { emailId: emailId }, // Filter
        { $set: body } // Update fields
      )

      if (result.modifiedCount > 0) {
        // Document updated successfully
        return res.status(200).send({ message: "Document updated successfully" })
      } else {
        // No document was updated (probably because the data is the same)
        return res.status(200).send({ message: "No changes required" })
      }
    } else {
      return res.status(200).send({ message: "No Email Id Exist" })
    }
  } catch (error) {
    // Handle any errors
    return res.status(500).send({
      message: "Internal server error",
      error: error.message,
    })
  }
})

userApp.get("/get-user/:id", async(req,res)=>{
  var profilesCollection = req.profilesCollection
  var id = req.params.id
  const user = await profilesCollection.findOne({ userId: id })
  res.status(200).send({ user })
})

module.exports = userApp
