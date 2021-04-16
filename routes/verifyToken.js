const jwt = require('jsonwebtoken');
var cookieParser = require('cookie-parser');
var cookie = require('cookie');

module.exports = function(req,res,next){

    //const oldtoken = req.header('auth-token');
    //Get auth token from cookie now versus header
    const token = req.cookies['auth-token'];

    //console.log(token['auth-token']);
  
    if(!token) return res.status(401).send('Access Denied');

    try{
        const verfied = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = verfied;
        next();

    }catch(err){
        res.status(400).send('Invalid Token');
        //redirect('/login);

    }

}