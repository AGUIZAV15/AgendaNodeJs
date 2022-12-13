const express = require("express");
const mongoose = require("mongoose");

const routerContactos = require('./src/routes/api');
const app = express();

const port = 3000;
app.use(routerContactos);

app.get('',(req, res) => {
    res.send("hello");
});


const uri = 'mongodb+srv://user:1234@cluster0.syy9wye.mongodb.net/agenda_de_contactos?retryWrites=true&w=majority';

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




