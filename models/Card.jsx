const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a title'],
        unique: true,
        trim: true,
        maxlenght: [40, 'Title canot be more than 40']
    },
    status: {
        type: String,
        required: true,
        maxlenght: [200, 'Desc canot be more than 40']
    }
})

module.exports = mongoose.models.Card || mongoose.model('Card', CardSchema);