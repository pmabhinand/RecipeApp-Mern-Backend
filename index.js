//import dotenv  
require('dotenv').config()

//import express
const express = require('express')

//import cors
const cors = require('cors')

//import router
const router = require('./Routing/router')

//import connection.js
require('./DataBase/connection')

//create server
const tastyServer = express()

//use of cors by server
tastyServer.use(cors())

//parsing json
tastyServer.use(express.json())

//server using the router
tastyServer.use(router)

//customize port
const PORT = 4001 || process.env

//run server
tastyServer.listen(PORT,()=>{
    console.log(`Server running successfully at port number ${PORT}`);
})

//get request
tastyServer.get('/',(req,res)=>{
    res.send('get request')
})

//post request
tastyServer.post('/',(req,res)=>{
    res.send('post request')
})

//put request
tastyServer.put('/',(req,res)=>{
    res.send('put request')
})