//import express
const express = require('express')

//import controller
const userController = require('../Controller/userController')

//create an object for Router() class in the express module
const router = new express.Router()

//path to solve the request
//syntax = router.httpreq('path',()=>{how to solve})

//1)register
router.post('/user/register',userController.register)

//export router
module.exports = router