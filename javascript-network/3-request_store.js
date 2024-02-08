const fs = require('fs');
const request = require('request');

const url = process.argv[2];
const filePath = process.argv[3];

request.get(url, function(error, response, body) {
    if (error) {
        console.error("Error:", error);
    } else if (response.statusCode !== 200) {
        console.error("Status code:", response.statusCode);
    } else {
        fs.writeFile(filePath, body, 'utf-8', function(err) {
            if (err) {
                console.error("Error writing file:", err);
            } else {
                console.log("File saved successfully.");
            }
        });
    }
});

