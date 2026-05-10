  const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; 
  app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
  mongoose.connect('mongodb://localhost:27017/EDUTracker', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(error => console.log('MongoDB connection error:', error));
  const studentRoutes = require('./routes/studentRoutes');
app.use('/students', studentRoutes); 

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

