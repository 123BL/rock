var rPs = ["Rock", "Paper", "Scissor"];
var userInput;
var computerInput;

function Scissor(){
  userInput = "Scissor";
  compareChoice();
}

  function Rock(){
    userInput = "Rock";
    compareChoice();
  }

function Paper(){
  userInput = "Paper";
  compareChoice();
}

function compareChoice(){
  computerInput = rPs[Math.floor(Math.random() * 3)];

  if (userInput===computerInput){
    document.getElementById("result").innerHTML = "it's a tie";
}

  if (userInput ==="Rock"){
  document.getElementById ("result").innerHTML = "you lost!";
}


  if (userInput ==="Paper"){
  document.getElementById ("result").innerHTML = "you lost!";
}


  if (userInput ==="Scissor"){
  document.getElementById ("result").innerHTML = "you lost!";
}
}
