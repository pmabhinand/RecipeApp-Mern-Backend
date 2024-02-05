//import express
const express = require('express')

//import controller
const userController = require('../Controller/userController')

const recipeController = require('../Controller/recipeController')

//import jwtMiddleware
const jwtMiddleware = require('../Middleware/jwtMiddleware')

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


//export router
module.exports = router