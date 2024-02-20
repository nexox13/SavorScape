const express = require('express');
const mongoose = require('mongoose');

const app = express();
const Port = 8082;
 
app.use(express.json());
 
app.listen(
    Port,
    () => console.log(`It's alive on http://10.115.1.14:${Port}`)
)
 
// Add a new document to the collection
app.post("/", async (req, res) => {
    let collection = await db.collection("posts");
    let newDocument = req.body;
    newDocument.date = new Date();
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
  });