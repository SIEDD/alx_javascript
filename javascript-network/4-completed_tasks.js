const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2);
const apiUrl = args[0];

const options = {
    url: apiUrl,
    method: 'GET'
};

request(options, (err, res, body) => {
    if (err) console.log(err);
    if (res) {
        const todos = JSON.parse(body);
        const completedTasksCount = {};

        todos.forEach(todo => {
            if (todo.completed) {
                const userId = todo.userId;
                completedTasksCount[userId] = (completedTasksCount[userId] || 0) + 1;
            }
        });

        Object.keys(completedTasksCount).forEach(userId => {
            console.log(`User ${userId}: ${completedTasksCount[userId]} completed tasks`);
        });
    }
});
