const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const responseSchema = new Schema({
    name: { type: String, required: false },
    type: { type: Number, required: false },
    cooperationsIntelligent: { type: Number, required: true },
    cooperationsNotIntelligent: { type: Number, required: true },
    defectionsIntelligent: { type: Number, required: true },
    defectionsNotIntelligent: { type: Number, required: true }
}, {
    timestamps: false,
});

const Response = mongoose.model('Response', responseSchema);

module.exports = Response;