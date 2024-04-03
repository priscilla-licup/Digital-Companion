// ASK DICE PAGE

document.getElementById('regular').addEventListener('click', function() {
  // Assuming the special die's value is pre-determined or calculated before this function is called
  const diceValue = "1,2,3,4,5,6"
  localStorage.setItem('diceType', 'regular');
  localStorage.setItem('diceValue', diceValue); // Store the special dice value
  window.location.href = 'trialroll.html'; // Redirect to the dice roll page
});

document.getElementById('zeroSix').addEventListener('click', function() {
  // Assuming the special die's value is pre-determined or calculated before this function is called
  const diceValue = "0,0,0,6,6,6"
  localStorage.setItem('diceType', 'special');
  localStorage.setItem('diceValue', diceValue); // Store the special dice value
  window.location.href = 'specialroll.html'; // Redirect to the dice roll page
});

document.getElementById('twoFourSix').addEventListener('click', function() {
  // Assuming the special die's value is pre-determined or calculated before this function is called
  const diceValue = "2,2,4,4,6,6"
  localStorage.setItem('diceType', 'special');
  localStorage.setItem('diceValue', diceValue); // Store the special dice value
  window.location.href = 'specialroll.html'; // Redirect to the dice roll page
});

document.getElementById('oneThreeFive').addEventListener('click', function() {
  // Assuming the special die's value is pre-determined or calculated before this function is called
  const diceValue = "1,1,3,3,5,5"
  localStorage.setItem('diceType', 'special');
  localStorage.setItem('diceValue', diceValue); // Store the special dice value
  window.location.href = 'specialroll.html'; // Redirect to the dice roll page
});

document.getElementById('oneTen').addEventListener('click', function() {
  // Assuming the special die's value is pre-determined or calculated before this function is called
  const diceValue = "-1,-1,-1,-1,10,10"
  localStorage.setItem('diceType', 'special');
  localStorage.setItem('diceValue', diceValue); // Store the special dice value
  window.location.href = 'specialroll.html'; // Redirect to the dice roll page
});