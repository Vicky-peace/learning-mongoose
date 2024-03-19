import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import mongoose from 'mongoose';

//routes
import universityRoute from "./routes/universityRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

//mongoose connection
mongoose.set('strictQuery', true);
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() =>{
    console.log('Connected to MongoDB');
}).catch(err =>{
    console.log('Error connecting to MongoDB', err);
});

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



//Instantiate routes
universityRoute(app);


app.get('/', (req,res) =>{
    res.sendStatus('Welcome to my RestAPI')
});

app.listen(PORT, () =>{
    console.log(`Server is running at port ${PORT}`)
});
