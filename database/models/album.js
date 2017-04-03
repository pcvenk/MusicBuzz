const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    title: String,
    date: Date,
    copiesSold: Number,
    numberTracks: Number,
    image: String,
    revenue: Number
});

const Album = mongoose.model('Album', albumSchema);

module.exports = Album;