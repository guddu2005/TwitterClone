const mongoose = require("mongoose");

const connectToMongoDB = async()=>{
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDb Connectced:${connect.connection.host}`);
        console.log(`MONGO_URI : ${process.env.MONGO_URI}`)
    } catch (error) {
        console.error(`Error connection to mongoDB: ${error.message}`);
		process.exit(1);
    }
}

module.exports= connectToMongoDB;