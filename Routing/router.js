//import express
const express = require('express')

//import controller
const userController = require('../Controller/userController')

const recipeController = require('../Controller/recipeController')

const saveController = require('../Controller/saveController')

//import jwtMiddleware
const jwtMiddleware = require('../Middleware/jwtMiddleware')

//import multer
const multerConfig = require('../Middleware/multerMiddleware')

//create an object for Router() class in the express module
const router = new express.Router()

//path to solve the request
//syntax = router.httpreq('path',()=>{how to solve})

//1)register
router.post('/user/register',userController.register)

//2)login
router.post('/user/login',userController.login)



//add recipe
router.post('/recipe/add',jwtMiddleware,recipeController.addRecipe)



//get recipes for home page
router.get('/recipe/home-recipe',recipeController.getHomeRecipe)

//get recipes for all recipes page
router.get('/recipe/all-recipe',jwtMiddleware,recipeController.getAllRecipe)

//get recipes for my recipes page
router.get('/user/my-recipe',jwtMiddleware,recipeController.getMyRecipe)


//get recipes based on search item
router.get('/recipe/search',recipeController.getSearchRecipe)


//delete recipe
router.delete('/recipe/remove/:id',jwtMiddleware,recipeController.deleteMyRecipe)

//for storing saved recipe
router.post('/save/add',jwtMiddleware,saveController.saveRecipe)

//for getting saved recipes
router.get('/save/my-save',jwtMiddleware,saveController.getMySavedRecipes)

//for deleting saved recipe
router.delete('/save/remove/:id',jwtMiddleware,saveController.deleteSavedRecipe)

//for updating recipe
router.put('/recipe/update',jwtMiddleware,recipeController.updateMyRecipe)

//for updating profile image
router.put('/user/update',jwtMiddleware,multerConfig.single("profile"),userController.updateProfile)




//export router
module.exports = router