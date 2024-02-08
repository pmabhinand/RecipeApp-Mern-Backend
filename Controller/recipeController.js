//import model
const recipes = require('../Model/recipeSchema')


//logic for add recipe

exports.addRecipe = async(req,res)=>{
  //destructuring data
  const {recipeName,introduction,category,ingredients,preparation,time,url} = req.body

  //taking userId
  const userId = req.uniqueId

  try{
  //creating object for model and adding data
  const newRecipe = new recipes({
    recipeName,
    introduction,
    category,
    ingredients,
    preparation,
    time,
    url,
    userId
  })

  //saving data in collection
  await newRecipe.save()

  res.status(200).json(newRecipe)

}catch(error){
    res.status(401).json('request failed due to ',error)
}

}


//logic for getting recipes to homepage

exports.getHomeRecipe = async(req,res)=>{
  try{

  const popularRecipe = await recipes.find().limit(4) //getting first 4 documents
  const latestRecipe = await recipes.find().limit(4).sort({$natural:-1}) //getting last 4 documents

  res.status(200).json({
    popularRecipe,
    latestRecipe
  })

  }catch(error){
    res.status(401).json('request failed due to ',error)
  }
}


//logic for getting recipes to all recipes page

exports.getAllRecipe = async(req,res)=>{
  try{

  const AllRecipe = await recipes.find()
  res.status(200).json(AllRecipe)

  }catch(error){
    res.status(401).json('request failed due to ',error)
  }
}


//logic for getting recipes to my recipes page

exports.getMyRecipe = async(req,res)=>{
  const userId = req.uniqueId
  try{

  const myRecipe = await recipes.find({userId})
  res.status(200).json(myRecipe)

  }catch(error){
    res.status(401).json('request failed due to ',error)
  }
}

//logic for getting recipes based on search item

exports.getSearchRecipe = async(req,res)=>{
  const searchItem = req.query.search
  console.log(searchItem);
 
  const query = {
    recipeName:{
      $regex:searchItem , $options:'i'
    }
  }

  try{
  const searchRecipe = await recipes.find(query)
  res.status(200).json(searchRecipe)

  }catch(error){
    res.status(401).json('request failed due to ',error)
  }

}


//logic for delete recipe
exports.deleteMyRecipe = async(req,res)=>{
  const {id} = req.params

try{
  const removedRecipe = await recipes.findByIdAndDelete({_id:id})
  res.status(200).json(removedRecipe)
}catch(error){
  res.status(401).json('request failed due to ',error)
}

}