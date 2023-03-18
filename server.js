import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';
import categoryRoutes from './routes/categoryRoutes.js';
import productRoutes from './routes/productRouter.js'
import cors from 'cors';
import path from 'path'
import {fileURLToPath} from 'url';
//CONFIG env
dotenv.config();

//ES module fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//database config..
connectDB();

// REST OBJECT...
const app = express()

//middle wear..
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname,'./client/build')))

//routes..
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/category',categoryRoutes)
app.use('/api/v1/product',productRoutes)

//REST API....
app.use('*',function(req,res){
  res.sendFile(path.join(__dirname,"./client/build/index.html"));
})

// PORT...
const PORT = process.env.PORT || 8080;

//RUN LISTEN...

app.listen(PORT,()=>{
    console.log(`server running on ${process.env.DEV_MODE} mode on ${PORT}`);
})