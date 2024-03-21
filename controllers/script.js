function roll() {
    var diceElement = document.getElementById('dice');
    var diceValue = Math.floor(Math.random() * 6) + 1;
    diceElement.innerHTML = '<img src="content/images/dice' + diceValue + '.png" id="dice">';
}

// ---------- HOME PAGE ----------

function rollpage() {
    window.location.href = '../views/roll/askroll.html'; // The path to the Roll page
}

function specialEvent() {
    window.location.href = 'special-event.html'; // The path to the Special Event page
}

function guide() {
    window.location.href = 'guide.html'; // The path to the Guide page
}

// ---------- ASK ROLL PAGE ----------

function yesDice() {
    window.location.href = 'spin.html'; // The path to the Guide page
}

function noDice() {
    window.location.href = 'trialroll.html'; // The path to the Guide page
}

// ---------- SPECIAL ROLL PAGE ----------

// function regularDice() {
//     const buttonValue = document.getElementById('regulardie').getAttribute('data-value');

// }

// function specialDice() {
//     const buttonValue = document.getElementById('specialdie').getAttribute('data-value');
// }