// Initialize an empty array to store words
var wordsArray = [];

// Loop to prompt the user to enter three words
for (var i = 0; i < 3; i++) {
    // Prompt the user and store the entered word in the array
    var word = prompt('Enter word ' + (i + 1) + ':');
    wordsArray.push(word);
}

// Create a new h2 element for the header
var headerElement = document.createElement('h2');
headerElement.textContent = 'CSS Homework';

// Create a new ul element
var ulElement = document.createElement('ul');

// Loop through the array and create li elements
for (var j = 0; j < wordsArray.length; j++) {
    // Create a new li element
    var liElement = document.createElement('li');
    // Set the text content of the li element to the current word
    liElement.textContent = wordsArray[j];
    // Append the li element to the ul element
    ulElement.appendChild(liElement);
}

// Append the ul element to the body of the document
document.body.appendChild(headerElement);
document.body.appendChild(ulElement);
