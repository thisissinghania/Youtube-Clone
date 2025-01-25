import dotenv from "dotenv";
import express from 'express';
import ConnectDB from "./db/index.js";

dotenv.config();

ConnectDB();
const app = express();
const port  = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Example app listening on port`)
});

