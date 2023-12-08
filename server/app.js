const http = require('http');
const dotenv = require('dotenv');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const connectDB = require('./config/database');
const cors = require('cors');

const app = express();
const router = require('./router');

dotenv.config();

app.use(logger('dev'));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/build')));
app.use(cors());

app.use('/api', router); 

app.get('*', (req, res) => {

    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});


app.use((req, res, next) => {
    res.status(404).send('Page Not Found');
});


app.use((err, req, res, next) => {
    console.error(err); 
    res.status(500).send('Server Error');
});

let port = process.env.PORT || '3001'; 
app.set('port', port);

const start = async () => {
  try {
    await connectDB();
    console.log('Connected to MongoDB');
    
    http.createServer(app).listen(port, () => {
      console.log(`Server listening on localhost:${port}`);
    });
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1); 
  }
}

start();


