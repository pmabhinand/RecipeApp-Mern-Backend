//import multer
const multer = require('multer')

//defining storage
const storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'./upload')
    },
    filename:(req,file,callback)=>{
        const filename = `image-${Date.now()}-${file.originalname}`
        callback(null,filename)
     }
})

//defining filefilter
const fileFilter =(req,file,callback)=>{
    
    if(file.mimetype ==='image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg'){
        callback(null,true)
    }else{
        callback(null,false)
        return callback(new Error("only png,jpg,jpeg files are allowed"))
    }
    
}

//creating multer
const multerConfig = multer({
    storage,
    fileFilter
})

module.exports = multerConfig