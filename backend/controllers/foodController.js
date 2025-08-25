import foodModel from "../models/FoodModel.js";

import fs from 'fs';



// add food

const addFood=async(req,res)=>{

    let image_filename=`${req.file.filename}`;
    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })

    try {
        await food.save();
        res.status(200).json({success:true, message:'Food Item Added'})
    } catch (error) {
        console.log(`error in try catch food controller add food`,error)
        res.json({success:false,message:'internal server error'})
    }
}


export {addFood}