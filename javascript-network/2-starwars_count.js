const process = require('process');
const request = require('request');

const apiUrl = process.argv[2];

const characterId = 18;

request(apiUrl, function(error, response, body) {
    if (!error && response.statusCode == 200) {
        const filmsData = JSON.parse(body);
        let moviesCount = 0;
        filmsData.forEach(film => {
            if (film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)) {
                moviesCount++;
            }
        });
        console.log(moviesCount);
    } else {
        console.error("Error:", error);
    }
});

