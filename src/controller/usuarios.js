const jwt = require('jsonwebtoken');
const modelo = require('./../model/usuario');

require('dotenv').config();
const crypto = require('crypto');
// find equivale a el select

function hashPassword(pwd) {
	return crypto.scryptSync(pwd,'secret',24);
}


module.exports = {
	login: (req,res) => {
		const credenciales = {
			correo : req.body.correo,
			password : hashPassword(req.body.password)
		};
		
		modelo.findOne(credenciales).then(response => {
			if(response){
				console.log(response);
				const {_id, nombre} = response;
				const token = jwt.sign({_id,nombre},process.env.SECRET);
				res.send({token, nombre});
			}else{
				res.sendStatus(401);
			}
		}).catch(err => {
			res.sendStatus(400);
		});
	},
	registro: (req, res) => {
 	const body = req.body; 
 	const hashedPassword = hashPassword(body.password);
 	body.password = hashedPassword;
            modelo.create(body).then(Response => {   
				         
                res.send(Response);
            });
    }
};