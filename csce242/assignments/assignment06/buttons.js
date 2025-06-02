const iceCreamColumn = document.getElementById('iceCreamColumn');
const iceCreamMessages = document.getElementById('iceCreamMessages');

let clickCount = 0;

iceCreamColumn.addEventListener('click', () => {
    clickCount++;

    // Create a new paragraph for each click
    const message = document.createElement('p');
    message.textContent = 'I like IceCream!';
    message.style.fontWeight = 'bold'; // Make the text bold
    iceCreamMessages.appendChild(message);
});

const numberRange = document.getElementById('numberRange');
const numberMessage = document.getElementById('numberMessage');

numberRange.addEventListener('input', () => {
    const value = numberRange.value;
    numberMessage.textContent = `I want ${value} ice creams!`;
});


const showIceCreamButton = document.getElementById('showIceCreamButton');
const iceCreamImage = document.getElementById('iceCreamImage');

showIceCreamButton.addEventListener('click', () => {
    iceCreamImage.style.display = 'block'; // Show the image
    showIceCreamButton.style.display = 'none'; // Hide the button
});