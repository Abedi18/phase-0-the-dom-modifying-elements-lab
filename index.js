// Select the main element with ID "main"
const main = document.querySelector('#main');

// Remove the main element from the DOM
main.remove();

// Create a new H1 element with ID "victory"
const newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');

// Add text to the new H1 element
const name = "YOUR-NAME";
newHeader.textContent = `${name} is the champion`;

// Append the new H1 element to the body of the document
document.body.appendChild(newHeader);