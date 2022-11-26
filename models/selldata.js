const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sellschema = new Schema({
    name: {
        type:String,
        required:true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    bookname: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    photo: {
        type: String
    }
});

module.exports = mongoose.model('Selldb', sellschema);