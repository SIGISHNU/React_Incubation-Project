const express = require('express');
const res = require('express/lib/response');
const dotenv = require('dotenv');
const notes = require('./data/notes');
const ConnectMongoose = require('./config/db');
const userRouter = require ('./Routes/userRouter')

const app = express();
dotenv.config();
ConnectMongoose();
app.use(express.json());



// app.get('/',(req,res)=>{
//     res.send("API is running...")
// })

// app.get('/notes',(req,res)=>{
//     res.json(notes);
// })

// app.get('/notes/:id',(req,res)=>{
//     const note = notes.find((notes)=> notes._id === req.params.id);
//     res.send(note)
// })

app.use('/users' ,userRouter)


app.listen( process.env.PORT , console.log(`Server started on PORT ${process.env.PORT}`));
