  
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const User = require('./models/User');
const app = express();
  mongoose.connect('mongodb://localhost:27017/skilldevproj', { useNewUrlParser: true, useUnifiedTopology: true });
  app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'your_secret_key', resave: false, saveUninitialized: true }));
app.use(express.static('public'));
  app.get('/', (req, res) => {
    if (req.session.user) {
        res.redirect('/index');
    } else {
        res.redirect('/login');
    }
});
  app.get('/login', (req, res) => res.sendFile(__dirname + '/login.html'));
app.get('/signup', (req, res) => res.sendFile(__dirname + '//signup.html'));
  app.post('/register', async (req, res) => {
    const { email, username, password } = req.body;
    const newUser = new User({ email, username, password }); 
    await newUser.save();
    res.redirect('/login');
});
  app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) {
        req.session.user = user;
        res.redirect('/index');
    } else {
        res.send('Invalid credentials.');
    }
});
  app.get('/index', (req, res) => {
    if (req.session.user) {
        res.sendFile(__dirname + '/sindex.html');
    } else {
        res.redirect('/login');
    }
});
  app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/login');
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));


app.get('/main', (req, res) => {
    if (req.session.user) {
        res.sendFile(__dirname + '/sindex.html');
    } else {
        res.redirect('/login');
    }
});
