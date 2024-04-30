const mongoose = require("mongoose");

const connectToDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("DB CONNECTED!", connect.connection.name);
    }
    catch (err) {
        console.log(err);
        process.exit();
    }   
}

module.exports = connectToDb;