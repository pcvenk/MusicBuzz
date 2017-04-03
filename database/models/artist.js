const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
    name: String,
    age: Number,
    yearsActive: Number,
    image: String,
    genre: String,
    website: String,
    netWorth: Number,
    labelName: String,
    retired: Boolean,
    albums: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Album'
    }]

});

const Artist = mongoose.model('Artist', artistSchema);

module.exports = Artist;
