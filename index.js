const PORT = 8000;
const express = require('express');
const app = express();
const db = require('./database/config/mongodb');
const router = require('./route')
const expressLayouts = require('express-ejs-layouts');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('./assets'));

app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);



// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', router)
app.listen(PORT, ()=>{console.log("connected to server : "+ PORT) })
