const mongoose = require ('mongoose');

const ConnectMongoose = async () =>{
    
    try {

        const connectDB = await mongoose.connect(process.env.MONGOOSE_DB , {
            useUnifiedTopology : true ,
            useNewUrlParser:true,
           
        });

        console.log(`MongoDB connectd .... ${connectDB.connection.host}`);
        
    } catch (error) {
        
        console.log(`Error : ${error.message}`);
        process.exit();
    }
};


module.exports = ConnectMongoose ;




