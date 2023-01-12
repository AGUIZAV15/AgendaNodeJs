const express = require("express");
const mongoose = require("mongoose");

require('dotenv').config();

const routerContactos = require('./src/routes/api');
const app = express();

const port = process.env.PORT;
app.use(express.json());
app.use(routerContactos);

app.get('',(req, res) => {
    res.send("hello");
});


const uri = process.env.MONGODB;

mongoose.connect(uri, (err) => {
if(err){
    console.log('No se pudo conectar a la base de datos');
}
else{
    console.log('Se conecto correctamente a la base de datos');
    app.listen(port, () => {
        console.log('app is running in port ' + port);
    });
    
}
});




