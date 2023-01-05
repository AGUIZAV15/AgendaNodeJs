const jwt = require('jsonwebtoken');
const modelo = require('./../model/usuario');

require('dotenv').config();
// find equivale a el select

module.exports = {
	login: (req,res) => {
		const credenciales = {
			correo : req.body.correo,
			password : req.body.password
		};
		
		modelo.findOne(credenciales).then(response => {
			if(response){
				console.log(response);
				const {_id, nombre} = response;
				const token = jwt.sign({_id,nombre},process.env.SECRET);
				res.send(token);
			}else{
				res.sendStatus(401);
			}
		}).catch(err => {
			res.sendStatus(400);
		});
	},
	registro: (req, res) => {
 const body = req.body;                       
            modelo.create(body).then(Response => {                
                res.send(Response);
            });
    }
};