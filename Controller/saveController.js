//import model
const saves = require('../Model/saveSchema')

//logic for storing saved recipes
exports.saveRecipe = async(req,res)=>{

    const {recipeName,introduction,category,ingredients,preparation,time,url} = req.body

    const userId = req.uniqueId

   try{

    const existSaved =await saves.findOne({userId,recipeName})

    if(existSaved){
        res.status(406).json('Recipe already saved')
    }
    else{
        const mySavedRecipe = new saves({
            recipeName,
           introduction,
           category,
           ingredients,
           preparation,
           time,
           url,
           userId
        }) 
           
        await mySavedRecipe.save()
        res.status(200).json(mySavedRecipe)  

    }

  }catch(error){
    res.status(401).json('request failed due to ',error)
} 

}



//logic for getting saved recipes
exports.getMySavedRecipes = async(req,res)=>{
    const userId = req.uniqueId
 
 try{   
   const allSavedRecipes = await saves.find({userId})

   res.status(200).json(allSavedRecipes)

}catch(error){
    res.status(401).json('request failed due to ',error)
} 

}



//logic for deleting saved recipe
exports.deleteSavedRecipe = async(req,res)=>{
    const {id} = req.params
try{
   const removedSave = await saves.findByIdAndDelete({_id:id})
   res.status(200).json(removedSave) 
}catch(error){
    res.status(401).json('request failed due to ',error) 
} 

}

