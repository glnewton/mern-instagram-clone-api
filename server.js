const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const Messages = require('./models/Message')
const db = mongoose.connection
const messageData = require('./utilities/data')
const cors = require('cors')

//Environment Variables

const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI;
const app = express();

//Coonnection to MongoDB
mongoose.connect(MONGODB_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});

db.on('error', (error) => console.log(error.message + ' is Mongod not running?'));
db.on('disconnected', () => console.log('mongo disconnected'));

// Middleware

app.use(express.urlencoded({ extended: false }))// extended: false - does not allow nested objects in query strings
app.use(express.json()); //use .json(), not .urlencoded()
app.use(express.static('public')) // we need to tell express to use the public directory for static files... this way our app will find index.html as the route of the application! We can then attach React to that file!
//app.use(cors())
app.use(cors({ origin: '*' }));

// Routes

const messagesController = require('./controllers/messagesController.js');

app.use('/messages', messagesController);

// Seeding the db
app.get('/seed', async (req, res) => {
    await Messages.deleteMany({});
    await Messages.insertMany(messageData);
    res.send('done!');
  });

app.listen(PORT, () => {
    console.log('Server active on port: ', PORT)
  })


  