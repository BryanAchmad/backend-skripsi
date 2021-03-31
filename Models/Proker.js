const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let prokerSchema = new Schema({
    judul: {
        type: String
    },
    divisi: {
        type: String
    },
    deskripsi: {
        type: String
    }
}, {
    collection: 'prokers'
})

module.exports = mongoose.model('Proker', prokerSchema)