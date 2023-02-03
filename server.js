const express = require('express')
const cors = require('cors')
require('dotenv').config()


const mongoose = require('mongoose')
mongoose.set('strictQuery', true);
const db = mongoose.connection
// const { MONGODB_USER, MONGODB_PASSWORD, MONGODB_IP, MONGODB_PORT } = require('./config/config')

const Messages = require('./models/Message')
const messageSeedData = require('./utilities/messageSeedData')


//Environment Variables
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_IP}:${MONGODB_PORT}/?authSource=admin';
const app = express();

const connectWithRetry = () => {
  mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB is connected'))
  .catch(error => {
    console.log(error)
    console.log('...retrying MongoDB connection...')
    setTimeout(connectWithRetry, 5000)
  })
}

//Connection to MongoDB
connectWithRetry();
db.on('error', (error) => console.log(error.message + ' is MongoDB running?'));
db.on('disconnected', () => console.log('mongo disconnected'));

// Middleware
app.use(express.urlencoded({ extended: false }))// extended: false - does not allow nested objects in query strings
app.use(express.json()); //use .json(), not .urlencoded()
app.use(express.static('public')) // we need to tell express to use the public directory for static files... this way our app will find index.html as the route of the application! We can then attach React to that file!

app.use(cors({
  origin: process.env.CORS_ORIGIN
}));

// Routes
const messagesController = require('./controllers/messagesController.js');
// const messageRouter = require('./routes/messageRoutes')
const commentsController = require('./controllers/commentsController.js');
const userController = require('./controllers/userController.js');

app.use('/messages', messagesController);
// app.use('/api/v1/messages', messageRouter);
app.use('/comments', commentsController);
app.use('/users', userController);



// Seeding the db
app.get('/seed', async (req, res) => {
  await Messages.deleteMany({});
  await Messages.insertMany(messageSeedData);
  res.send('done!');
});

app.listen(PORT, () => {
  console.log('Server active on port: ', PORT)
})
