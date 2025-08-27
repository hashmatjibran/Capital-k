import express from 'express';
import { addFood, listFood, removeFood } from '../controllers/foodController.js';
import multer from 'multer';

const foodRouter = express.Router();

// image storage engine

const Storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        console.log('file in storage',file);
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({
    storage:Storage
})






foodRouter.get('/',(req, res)=>{
    res.send("hurrey")
})


foodRouter.post('/add',upload.single('image'),addFood);

foodRouter.get('/list',listFood);

foodRouter.post('/remove',removeFood)

export default foodRouter;