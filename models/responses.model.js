const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const responseSchema = new Schema({
    name: { type: String, required: false },
    names: { type: Array, required: false },
    type: { type: Number, required: false },
    cooperationsIntelligent: { type: Number, required: false },
    cooperationsNotIntelligent: { type: Number, required: false },
    defectionsIntelligent: { type: Number, required: false },
    defectionsNotIntelligent: { type: Number, required: false }
}, {
    timestamps: false,
});

const Response = mongoose.model('Response', responseSchema);

module.exports = Response;