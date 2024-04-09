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
    window.location.href = '../views/specialevent/special-event.html'; // The path to the Special Event page
}

function guide() {
    window.location.href = 'guide.html'; // The path to the Guide page
}

// ---------- ROLL PAGE ----------

function askDice() {
    window.location.href = 'roll/ask.html';
}

function specialDice() {
    window.location.href = 'spin.html'; 
}

function regularDice() {
    window.location.href = '../views/roll/trialroll.html'; // The path to the Guide page
}

function regular2Dice() {
    // Clear storage after roll to reset the state for next roll/page visit
    localStorage.removeItem('diceType');
    if(diceValue) {
        localStorage.removeItem('diceValue');
    }
    window.location.href = 'trialroll.html'; // The path to the Guide page
}

function backToMenu() {
    // Clear storage after roll to reset the state for next roll/page visit
    diceValue = ""
    localStorage.removeItem('diceType');
    if(diceValue) {
        localStorage.removeItem('diceValue');
    }
    window.location.href = '../home.html'; // The path to the Guide page
}

function selectDice() {
    // Clear storage after roll to reset the state for next roll/page visit
    localStorage.removeItem('diceType');
    if(diceValue) {
        localStorage.removeItem('diceValue');
    }
    window.location.href = 'ask.html'; // The path to the Guide page
}