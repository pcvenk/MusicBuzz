const Artist = require('../models/artist');

/**
 * Finds the lowest and highest age of artists in the Artist collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max ages, like { min: 16, max: 45 }.
 */
module.exports = () => {

    let minArtist = Artist
        .find({})
        .sort({age: 1})
        .limit(1)
        //from the list of returned results return only the age property
        .then(artists => artists[0].age);

    let maxArtist = Artist
        .find({})
        .sort({age: -1})
        .limit(1)
        .then(artists => artists[0].age);

    return Promise.all([minArtist, maxArtist])
        .then((result) => {
           return {
               min: result[0],
               max: result[1]
           };
        });

};
