const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const mongoose = require('mongoose');
const app = express();
const fs = require("fs");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(cors());

mongoose.connect('mongodb://mongo:27017/heros',
    {useNewUrlParser: true}
).then(()=> console.log('MongoDb connected')).catch(err => console.log(err));

const routes = require('./routes/routes.js')(app, fs);

const server = app.listen(3000,()=>{
    console.log(`listing on port ${server.address().port}`);
})