import Mongoose from 'mongoose';
const  mongoose  = Mongoose;

// require
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
// Damn you fucker require! Link below a MUST!
// https://github.com/nodejs/node/issues/33741 

require('dotenv').config({ path: 'variables.env'});

const connectDb = async () => {

    try {
        
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })

        console.log('DB connected');

    } catch (error) {
        console.log(error);
        process.exit(1); // stop app
    }


}
export default connectDb;