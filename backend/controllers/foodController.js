import foodModel from "../models/FoodModel.js";

import fs from 'fs';



// add food

const addFood=async(req,res)=>{
    console.log('req file',req.file);
    console.log('req body',req.body);

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

const listFood = async(req,res)=>{
    // const category = req.body.category;
    // console.log('category',category);

    // try {
    //     let foods;
    //     if(category){
    //         foods = await foodModel.find({category})
    //     }else{
    //         foods = await foodModel.find({})
    //     }
    //     res.status(200).json({success:true,foods})
    // } catch (error) {
    //     console.log('error in list food',error);
    //     res.json({success:false,message:'internal server error'})
    // }

    try {
            const foods = await foodModel.find({});
            res.status(200).json({success:true,foods});
    } catch (error) {
        console.log('error in list food',error);
        res.json({success:false,message:'internal server error'});
    }


}

const removeFood = async(req,res)=>{
    const foodId = req.body.id;
    console.log('foodId',foodId);

    try {
        const food = await foodModel.findById(foodId);
        if(food){

            const imagePath = `uploads/${food.image}`;
            fs.unlinkSync(`uploads/${food.image}`,()=>{});

            await foodModel.findByIdAndDelete(foodId);
            res.status(200).json({success:true,message:'Food Item Deleted'})

        }else{
            res.json({success:false,message:'Food Item Not Found'})
        }
    } catch (error) {
        console.log('error in remove food',error);
        res.json({success:false,message:'internal server error'})
    }
}


export {addFood , listFood , removeFood};