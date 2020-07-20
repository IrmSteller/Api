const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");

const app = express();
const fs = require("fs");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(cors);

const routes = require("./routes/routes.js")(app, fs);

const server = app.listen(3001,()=>{
    console.log(`listing on port ${server.address().port}`);
})