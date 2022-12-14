const contacto = require('./../model/contacto');

// find equivale a el select

module.exports = {
    get : (req, res) => {  
        const nombre = req.query.nombre;      
        const correo = req.query.correo;
        if (correo === undefined && nombre !== undefined) {
            contacto.find({status : 1, "nombre" : {$regex: '.*'+nombre+'.*'}})
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(404).send('error en busqueda');
            });
        }
        else if (correo !== undefined && nombre === undefined) {
            contacto.find({status : 1,"correo" :{$regex: '.*'+correo+'.*'} })
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(404).send('error en busqueda');
            });
        }
        else {
            contacto.find({status : 1})
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(404).send('error en busqueda');
            });
        }
        
    },
    ver: (req, res) => {
        const id = req.params.id;        
        contacto.findOne({status : 1, _id : id})
                .then(data => {
                    res.send(data);
                })
                .catch(err => {
                    res.status(404).send('error en busqueda');
                });
    },
    crear: (req, res) => {
            const body = req.body;                       
            contacto.create(body).then(Response => {                
                res.send(Response);
            });
    },
    guardar: (req, res) => {
        const id = req.params.id;
        const body = req.body;
        contacto.findOne({status : 1, _id : id})
                .then(data => {  
                    data.nombre = body.nombre === undefined ? data.nombre : body.nombre;  
                    data.telefono = body.telefono === undefined ? data.telefono : body.telefono;                  
                    data.correo = body.correo === undefined ? data.correo : body.correo;                    
                    data.save().then(() =>  {
                        res.send(data)
                    });                                                          
                })
                .catch(err => {
                    res.status(404).send('error en busqueda');
                });          
        
    },
    eliminar: (req, res) => {
        const id = req.params.id;        
        contacto.findOne({status : 1, _id : id})
                .then(data => {
                    data.status = 2;
                    data.save().then(() =>  {
                        res.send("Datos eliminados con exito");
                    });
                    
                })
                .catch(err => {
                    res.status(404).send('error en busqueda');
                });
    }
   
}