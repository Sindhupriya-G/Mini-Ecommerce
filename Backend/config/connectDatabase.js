const mongoose=require('mongoose');

const connectDatabase=()=>{
     mongoose,mongoose.connect(process.env.DB_URL).then(()=>{
        console.log('mongodb connected');
     })
};

module.exports=connectDatabase;