const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const responseSchema = new Schema({
    name: {type: String, required: false},
    situationType: {type: Number, required: true},
    opponentType: {type: Number, required: true},
    doesCooperation: {type: Boolean, required: true}
}, {
    timestamps: true,
});

const Response = mongoose.model('Response', responseSchema);

module.exports = Response;