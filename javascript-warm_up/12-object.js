// Array of numbers
const numbers = [3, 12, 7, 4, 89, 23, 17];

// Loop through the array and replace the value 12 with 89
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 12) {
        numbers[i] = 89;
    }
}

// Print the updated array
console.log(numbers);


