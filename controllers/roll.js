// Element Selector
const dice1 = document.getElementById('dice-1')
const rollButton = document.getElementById('rollButton')


// Execute Dice Roll
const rollDice = () => {
    const diceType = localStorage.getItem('diceType');
    const diceValue = diceType === 'special' ? localStorage.getItem('diceValue') : null;

    // Animate Dices to Roll
    dice1.classList.add('rolling');

    // Adjust logic based on dice type
    var dice1Val;
    if(diceType === 'special' && diceValue) {
        // For simplicity, we'll just parse the first number from the stored value string for special dice
        dice1Val = parseInt(diceValue.split(',')[0]); // Example logic, adjust as needed
    } else {
        // Regular dice roll
        dice1Val = Math.floor((Math.random() * 6) + 1);
    }

    setTimeout(() => {
        dice1.dataset.face = dice1Val;
        dice1.classList.remove('rolling');
    }, 3000);

    // Clear storage after roll to reset the state for next roll/page visit
    localStorage.removeItem('diceType');
    if(diceValue) {
        localStorage.removeItem('diceValue');
    }
};

rollButton.addEventListener('click', function(e) {
    e.preventDefault();
    rollDice();
});

// Loads the Dice Type and Values 
document.addEventListener('DOMContentLoaded', () => {
    const diceType = localStorage.getItem('diceType'); // 'regular' or 'special'
    const diceValues = localStorage.getItem('diceValue'); // e.g., '0,0,0,6,6,6'

    // Update the display
    document.getElementById('diceType').textContent = diceType || 'Not set';
    document.getElementById('diceValues').textContent = diceValues || 'Not set';

    // Optionally, adjust the dice faces based on diceValues
    // updateDiceFaces(diceValues);
});

// function updateDiceFaces(diceValues) {
//     if (!diceValues) return; // Exit if no values are set

//     const valuesArray = diceValues.split(',');
//     // Assuming '#dice-1' is your dice container
//     const diceContainer = document.getElementById('dice-1');

//     // Clear previous faces
//     diceContainer.innerHTML = '';

//     // Generate and append new faces based on diceValues
//     valuesArray.forEach((value) => {
//         // Create a new dice face element
//         const face = document.createElement('div');
//         face.classList.add('dice-face');
//         face.setAttribute('data-face', value);

//         // Generate dots for the face based on its value
//         for (let i = 0; i < value; i++) {
//             const dot = document.createElement('span');
//             dot.classList.add('dot');
//             face.appendChild(dot);
//         }

//         // Append the new face to the dice container
//         diceContainer.appendChild(face);
//     });

//     // Optionally, display only the first face or manage faces visibility as needed
//     // Here, we show only the first face as an example
//     let firstFace = diceContainer.querySelector('.dice-face');
//     if (firstFace) {
//         firstFace.style.display = 'flex';
//     }
// }
