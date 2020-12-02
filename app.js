const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const fs = require('fs');
const path = require('path');
const mysql2 = require('mysql2');


const userRoutes = require('./routes/user');

const app = express();




app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', './layouts/homeLayout');


app.use(express.static(path.join(__dirname, 'public')));

app.use('/', userRoutes);

const port  = 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

/*
const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bakingdb'
});

connection.connect((error) => {
    if(error){
        console.log("MYSQL not connected");
    }else{
        console.log("MYSQL connected");
    }
});

*/