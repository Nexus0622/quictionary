const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient("mongodb+srv://Nexus:june0622@quictionary-cluster.ihm0a.mongodb.net/?retryWrites=true&w=majority")
const app = express();
const collection = "QuictionaryDB"
const userCol = "users"
const emptyErr = {error: ""}

app.set('port', 5000);
const db = client.db(collection);
app.use(cors());
//app.options('*', cors())
app.use(bodyParser.json());
client.connect();
app.use((req, res, next) => 
{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});

app.post('/api/register', async (req, res) => 
{
  const {username, password, email} = req.body;

  const usernameTaken = await db.collection(userCol).findOne({username: username})
  const emailTaken = await db.collection(userCol).findOne({email: email});

  if (usernameTaken != null)
  {
    return res.status(500).json({error:"Username already in use."});
  }

  if (emailTaken != null)
  {
    return res.status(500).json({error: "Email already in use"});
  }

  let user = {
    username:username,
    password:password,
    email:email
  }

  db.collection(userCol).insertOne(user);
  res.json(emptyErr)
})
app.listen(5000)