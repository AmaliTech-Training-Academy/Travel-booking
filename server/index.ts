import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import customerRouter from './routes/customerRoutes'

dotenv.config()
const app = express();
const port = process.env.PORT || 8000;
const corsOptions = {
    origin: true,
    credential: true
}

//middleware
app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser());


//routes
app.use("/customer-auth",customerRouter)
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})