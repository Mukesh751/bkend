import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import { config } from "dotenv";

import postRoutes from "./routes/post.js";

config({ path: './t.env' });

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({extended: true }));


app.use(express.json());

app.use(cors());

  app.get("/", (req, res) => res.send("Hello"));

 app.use("/posts", postRoutes);
const CONNECTION_URL = "mongodb+srv://ashuji478:Acenitrr@cluster0.fwuy52p.mongodb.net/aceDB";

const PORT = process.env.PORT|| 5000;

await mongoose.connect(CONNECTION_URL,{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
  console.log('DataBas connected.');
}).catch((e) =>{
  console.log('Connection Failed');
});


app.listen(PORT,"0.0.0.0", ()=>{
  console.log(`conncted at port ${PORT}`)
  });