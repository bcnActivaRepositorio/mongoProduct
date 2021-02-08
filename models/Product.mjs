// import mongoose
import  Mongoose  from 'mongoose';
const mongoose = Mongoose;

// object
const ProductSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    dateCreation: {
        type: Date,
        default: Date.now()
    },
});

export default mongoose.model('Product', ProductSchema);