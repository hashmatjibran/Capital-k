import mongoose from "mongoose";
export const connectDb = async()=>{
    await mongoose.connect('mongodb+srv://capital_k:Capitalk@capital-k.hv9336r.mongodb.net/?retryWrites=true&w=majority&appName=capital-k')
    .then(()=>{
        console.log('db connected')
    })
}