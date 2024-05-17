const { Router } = require('express'); 
const subscribeApp = Router(); 
  

subscribeApp.get('/', (req, res) => {
    res.send("Subscribed!")
}); 

subscribeApp.post('/Newsletter', async (req, res) => {
    const subsCollection = req.subsCollection;
    const body = req.body
    const result = await subsCollection.insertOne(body)
    if(result.insertedId){
        return res.status(200).send(result)
    } else {
        return res.status(500).send("Something went wrong")
    }
}); 

subscribeApp.post('/Enroll', async (req, res) => {
    const subsCollection = req.subsCollection;
    const body = req.body
    const result = await subsCollection.insertOne(body)
    if(result.insertedId){
        return res.status(200).send(result)
    } else {
        return res.status(500).send("Something went wrong")
    }
}); 
  
module.exports = subscribeApp;