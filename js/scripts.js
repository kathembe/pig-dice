function randomNum()  {
  var diceRoll = document.getElementById('dicenumber');
  var diceNumber1 = Math.floor(Math.random() * 6) + 1;
  dicenumber.innerHTML = diceNumber1;
};
