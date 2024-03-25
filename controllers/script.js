function roll() {
    var diceElement = document.getElementById('dice');
    var diceValue = Math.floor(Math.random() * 6) + 1;
    diceElement.innerHTML = '<img src="content/images/dice' + diceValue + '.png" id="dice">';
}

// ---------- HOME PAGE ----------

function rollpage() {
    window.location.href = '../views/roll/trialroll.html'; // The path to the Roll page
}

function specialEvent() {
    window.location.href = 'special-event.html'; // The path to the Special Event page
}

function guide() {
    window.location.href = 'guide.html'; // The path to the Guide page
}

// ---------- ROLL PAGE ----------

function specialDice() {
    window.location.href = 'spin.html'; // The path to the Guide page
}

function regularDice() {
    window.location.href = '../views/roll/trialroll.html'; // The path to the Guide page
}

function regular2Dice() {
    window.location.href = 'trialroll.html'; // The path to the Guide page
}
