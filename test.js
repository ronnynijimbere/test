// Define a class for representing a single shoe
class Shoe {
    constructor(name, code, quantity, value) { 
        this.name = name;
        this.code = code;
        this.quantity = quantity;
        this.value = value;
    }
}

// Create an array to store instances of shoes
const footwear = [];

// Create instances of shoes and add them to the array
const shoe1 = new Shoe("nike", 101, 2, 200);
footwear.push(shoe1);

const shoe2 = new Shoe("puma", 102, 3, 300);
footwear.push(shoe2);

const shoe3 = new Shoe("addidas", 103, 4, 400);
footwear.push(shoe3);

const shoe4 = new Shoe("reebok", 104, 4, 500);
footwear.push(shoe4);

const shoe5 = new Shoe("newBalance", 105, 5, 600);
footwear.push(shoe5);

// Display the array of shoes in a table format
console.table(footwear);

// Function to find a shoe by its name
function findShoeByName(name) {
    // Use the find method to search for a shoe by its name
    return footwear.find(shoe => shoe.name === name);
}

// Search for a shoe by name and log the result
const searchedShoe = findShoeByName("nike");
if (searchedShoe) {
    console.log("Found shoe:", searchedShoe);
} else {
    console.log("Shoe not found.");
}

// Function to find the shoe with the lowest value
function findLowestValue(array) {
    // Use the reduce method to find the shoe with the lowest value
    const lowestValueShoe = array.reduce((acc, curr) => curr.value < acc.value ? curr : acc, array[0]);
    // Log the details of the lowest value shoe
    console.log(`The lowest value shoe is ${lowestValueShoe.name}, valued at ${lowestValueShoe.value}`);
}

// Function to find the shoe with the highest value
function findHighestValue(array) {
    // Use the reduce method to find the shoe with the highest value
    const highestValueShoe = array.reduce((acc, curr) => curr.value > acc.value ? curr : acc, array[0]);
    // Log the details of the highest value shoe
    console.log(`The highest value shoe is ${highestValueShoe.name}, valued at ${highestValueShoe.value}`);
}

// Call the functions to find the lowest and highest value shoes
findLowestValue(footwear);
findHighestValue(footwear);
