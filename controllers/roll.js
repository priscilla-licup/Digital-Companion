// Element Selector
const dice1 = document.getElementById('dice-1')
const rollButton = document.getElementById('rollButton')

// Function for randomizing item

function getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}

// Execute Dice Roll
const rollDice = () => {
    const diceType = localStorage.getItem('diceType');
    const diceValue = diceType === 'special' ? localStorage.getItem('diceValue') : null;

    // Animate Dices to Roll
    document.getElementById('diceValue').textContent = "";
    dice1.classList.add('rolling');

    // Adjust logic based on dice type
    var dice1Val;
    if(diceType === 'special' && diceValue) {
        // For simplicity, we'll just parse the first number from the stored value string for special dice
        dice1Val = parseInt(getRandomItem(diceValue.split(','))); // Example logic, adjust as needed
        console.log(dice1Val);
    } else {
        // Regular dice roll
        dice1Val = Math.floor((Math.random() * 6) + 1); 
    }

    setTimeout(() => {
        document.getElementById('diceValue').textContent = `${dice1Val}`;
        dice1.dataset.face = dice1Val;
        dice1.classList.remove('rolling');
    }, 2000);
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


