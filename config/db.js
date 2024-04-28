import mongoose from "mongoose";
const connectdb = async () => {

    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`connected to Mangoose db ${mongoose.connection.host}`)
    } catch (error) {
        console.log(`Error is ${error}`)
    }
}

export default connectdb;