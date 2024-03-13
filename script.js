function roll() {
    var diceElement = document.getElementById('dice');
    var diceValue = Math.floor(Math.random() * 6) + 1;
    diceElement.innerHTML = '<img src="images/dice' + diceValue + '.png" id="dice">';
}
