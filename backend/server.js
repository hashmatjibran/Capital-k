import express from 'express'
import cors from 'cors'
import { connectDb } from './config/db.js';
import foodRouter from './routes/foodRoute.js';

//app config

const app = express();
const port =4000;


// middlewares
app.use(express.json())
app.use(cors())

// add Database connection    
connectDb();


// api endpoint
app.use("/api/food",foodRouter);

app.use('/images',express.static('uploads'));


app.get('/',(request , response)=>{
    console.log('hey');
    response.send("Message from Api")
})

app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`)
})

// mongodb+srv://capital_k:<db_password>@capital-k.hv9336r.mongodb.net/?retryWrites=true&w=majority&appName=capital-k