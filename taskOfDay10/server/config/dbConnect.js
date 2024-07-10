const mongoose = require("mongoose");

const dbConnect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('DB Connect Successfully');
    } catch (error) {
        console.log('DB Connection failed', error.message);
    }
};
dbConnect();   