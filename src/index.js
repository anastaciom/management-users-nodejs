require('dotenv').config()
const express = require('express');
const ejs = require('ejs');
const path = require('path');
const app = express();
const routes = require('./routes');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use('/', routes);

mongoose.connect(process.env.MONGODB_URL);
const db = mongoose.connection;

db.on('error', ()=>{console.log('ERRO NO DB')});
db.once('open', ()=>{console.log('DB rodando')});


app.listen(PORT, ()=>{
    console.log('Server is running');
});