
const jwt = require('jsonwebtoken');

require("dotenv").config()


const authentication=(req,res,next)=>{
    // console.log(req.body)

    if(!req.headers.authorization){
        return res.status(401).send({"msg":'plz check again and try login again'})
    }

    const token=req.headers.authorization.split(" ")[1]
    jwt.verify(token, "secret", function(err, decoded) {

       if(err){
        res.status(401).send({"msg":"plz check again and try login again"})
       }
       else{
        req.body.userId=decoded.userId
         next()
       }

      });

}

module.exports={authentication}

