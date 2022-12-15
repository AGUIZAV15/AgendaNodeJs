const jwt = require('jsonwebtoken');
const modelo = require('./../model/usuario');

// find equivale a el select

module.exports = {
	login: (req,res) => {
		const credenciales = req.body;
		modelo.findOne(credenciales).then(response => {
			if(response){
				console.log(response);
				const {_id, nombre} = response;
				const token =jwt.sign({_id,nombre},'holaMundo');
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