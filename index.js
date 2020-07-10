function rollDice() {
  console.log("Let's roll the dice!");

  var randomNumber=Math.round(Math.random() * 5 + 1);
  var image = "";

  if (randomNumber == 1){
    image = "dice 1.png";
  }
  if (randomNumber == 2){
    image = "dice 2.png";
  }
  if (randomNumber == 3){
    image = "dice 3.png";
  }
  if (randomNumber == 4){
    image = "dice 4.png";
  }
  if (randomNumber == 5){
    image = "dice 5.png";
  }
  if (randomNumber == 6){
    image = "dice 6.png";
  }

  document.querySelector("img").src = image
}
