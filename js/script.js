var enterButton = document.getElementById('enterbutton');
var againButton = document.getElementById('againbutton');
var output = document.getElementById('output');

var randomNumber = Math.floor(Math.random() * 10) + 1;

function checkNumber(){
  var input = document.getElementById('userinput').value;
  if(input == 31){
    output.innerHTML="You guessed right"+ ","+" it was"+ 31;
    output.style.color="#fff";
  }
  else if(input>31 && input<100){
    output.innerHTML="You guessed too high";
  }
  else if(input>31 && input>1){
    output.innerHTML="You guessed too low";
  }
  else if(input<1){
    output.innerHTML="Higher, it has to between 1 and 100";
  }
  else if(isNaN(input)){
    output.innerHTML="That's not a number!";
  }
  else{
    output.innerHTML="You guessed too low!";
  }

};
 enterButton.addEventListener('click', checkNumber);
  againButton.addEventListener('click', function(){
  location.reload();
});
