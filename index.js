const express = require('express')
const app = express()
const port = process.env.PORT||5000;
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// YXzb1XRq5WVMlfZZ
// invoiceUser

require('dotenv').config()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})



const uri = "mongodb+srv://invoiceUser:YXzb1XRq5WVMlfZZ@cluster0.ap4xy.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
      await client.connect();
      const invoiceCollection = client.db('allinvoice').collection('invoice');
      app.get('/billing-list', async (req, res) =>{
        const query = {};
        const result = await invoiceCollection.find(query).toArray();
        res.send(result);
      });

      app.post('/add-billing', async(req, res) =>{
        const newInvoice = req.body;
        const result = await invoiceCollection.insertOne(newInvoice);
    
        res.send(result);
      })

      app.delete('delete-billing/:id', async(req, res) =>{
        const id = req.params.id;
        const query = {_id:ObjectId(id)};
        const result =await invoiceCollection.deleteOne(query);
       
        res.send(result)
    
    })
  
    } finally {
      
    }
  }
  run().catch(console.dir);


app.listen(port, () => {
    console.log(`server site is running ${port}`)
  })
