import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js'

const ConnectDB = async () => {
    try {
        const checkDbHost = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`Mongo DB Host : ${checkDbHost.connection.host}`)

    } catch (error) {
        console.log("Mongo DB Connection", error);
        process.exit(1)
    }
}

export default ConnectDB