import mongoose from "mongoose";




const Connection = async () => {

    const URL = `mongodb://proitpm:itpm@ac-qhy6sm0-shard-00-00.dsgpbx2.mongodb.net:27017,ac-qhy6sm0-shard-00-01.dsgpbx2.mongodb.net:27017,ac-qhy6sm0-shard-00-02.dsgpbx2.mongodb.net:27017/PROJECT?ssl=true&replicaSet=atlas-14286f-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try {
        await mongoose.connect(URL,{useUnifiedTopology:true, useNewUrlParser : true});
        console.log('Database Connected Sucessfully');
        
    } catch (error) {
        console.log('Error While Connecting to the database',error);
        
    }

}

export default Connection;