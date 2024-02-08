const request = require('request');
const args = process.argv.slice(2);
const apiUrl = args[0];

request(apiUrl, (error, response, body) => {
    if (error) {
        console.error(error.message);
        return;
    }

    if (response.statusCode !== 200) {
        console.error("Failed to fetch data. Status code:", response.statusCode);
        return;
    }

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
});

