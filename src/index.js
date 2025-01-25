import dotenv from "dotenv";
import ConnectDB from "./db/index.js";
import app from './app.js'

dotenv.config();

ConnectDB().then(()=> {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server is running at port: ${process.env.PORT}`)
    });
    
}).catch((error)=> {
    console.log('App Listening Error:', error)
})

