const Artist = require('../models/artist');

/**
 * Finds the lowest and highest yearsActive of artists in the Artist collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max yearsActive, like { min: 0, max: 14 }.
 */
module.exports = () => {
    let minYears = Artist
        .find({})
        .sort({yearsActive: 1})
        .limit(1)
        .then(result => result[0].yearsActive);

    let maxYears = Artist
        .find({})
        .sort({yearsActive: -1})
        .limit(1)
        .then(result => result[0].yearsActive);

    return Promise.all([minYears, maxYears])
        .then((result) => {
            return {
                min: result[0],
                max: result[1]
            };
        });
};
