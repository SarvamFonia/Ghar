import express from 'express'
import connectDB from './db/connection.js';

const app = express();
import userRouter from './routes/userRoutes.js'
connectDB()
app.use(express.json());
const PORT = 3000;
app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to root URL of Server");
});

// =========================================== SignUp and Login ========================================

app.use('/users',userRouter)






app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);
