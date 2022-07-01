const express = require('express')
const app = express()
const port = process.env.PORT||5000;
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');



require('dotenv').config()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})


async function run() {
    try {
      await client.connect();
     
  
    } finally {
      
    }
  }
  run().catch(console.dir);


app.listen(port, () => {
    console.log(`server site is running ${port}`)
  })
