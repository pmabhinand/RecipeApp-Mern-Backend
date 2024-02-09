//import model
const users = require('../Model/userSchema')

//import jwt
const jwt = require('jsonwebtoken')


//logic for register
exports.register = async(req,res)=>{
  //destructuring user data from request body
   const {username,email,password} = req.body

  //checking if user already exist
  try{ const existUser = await users.findOne({email})
   //sending response if user already exists
   if(existUser){
    res.status(406).json('Account already exists,Please log in')
   }
   //storing register data if user not found
   else{
    //creating an object for model
    const newUser = new users({
      username,
      email,
      password,
      profile:""
    })
    //save  function in mongoose - to permenently store this data in mongodb
    await newUser.save()
    //sending response after storing data
    res.status(200).json(newUser)
   }}
   catch(error){
     res.status(404).json('Register request failed due to',error)
   }

}


//logic for login
exports.login = async(req,res)=>{
   const {email,password} = req.body

  try{ const existingUser = await users.findOne({email,password})

   if(existingUser){
      const token = jwt.sign({userId:existingUser._id},"pmAbhinand784")

     res.status(200).json({
       existingUser,
       token
     })
   }
   else{
    res.status(406).json('Incorrect email address or password')
   }}catch(error){
     res.status(401).json('Login failed due to',error)
   }
}


//logic for uploading image
exports.updateProfile = async(req,res)=>{
  const userId = req.uniqueId

  const {username,email,password} = req.body

  const profile = req.file.filename

  try{
  
  const uploadimage = await users.findByIdAndUpdate({_id:userId},{username,email,password,profile},{new:true}) 

  await uploadimage.save()
  res.status(200).json(uploadimage)

  }catch(error){
    res.status(401).json('request failed due to ',error)
  }
}