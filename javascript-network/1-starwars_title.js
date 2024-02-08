const process = require('process');
const request = require('request');

const movieID = process.argv[2];
const requestURL = `https://swapi-api.alx-tools.com/api/films/${movieID}`
request(requestURL, function(error, response, body) {
    if (!error && response.statusCode == 200) {
        const movieData = JSON.parse(body);
        console.log(movieData.title);
    } else {
        console.error("Error:", error);
    }
});

