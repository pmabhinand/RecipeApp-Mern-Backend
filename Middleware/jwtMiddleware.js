//import jwt
const jwt = require('jsonwebtoken')

//creating middleware function
const jwtMiddleware = (req,res,next)=>{
  //taking token from headers  
  const token = req.headers['authorization'].split(' ')[1]
  console.log(token);

  try{
  //verifying token
  const jwtResponse = jwt.verify(token,"pmAbhinand784")
  console.log(jwtResponse);

  //adding userId to request configuration on the key - uniqueId
  req.uniqueId = jwtResponse.userId
  next()

  }catch(error){
    res.status(401).json('Authorization failed .... please login')
  }


}

module.exports = jwtMiddleware