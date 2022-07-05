for(var i=0;i<7;i++){

document.querySelectorAll("button")[i].addEventListener("click",handleClick);

function handleClick(){
  var keyPressedHTML=this.innerHTML;
  makeSound(keyPressedHTML);
  buttonAnimation(keyPressedHTML);
}
}
document.addEventListener("keydown",keyGotPressed);

function keyGotPressed(event){
  makeSound(event.key);
  buttonAnimation(event.key);
}
function makeSound(key){
  switch (key) {
    case "a":
    var audio=new Audio("sounds/crash.mp3");
    audio.play();
      break;
    case "s":
      var audio=new Audio("sounds/kick-bass.mp3");
      audio.play();
        break;
    case "d":
        var audio=new Audio("sounds/snare.mp3");
        audio.play();
        break;
    case "f":
        var audio=new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
    case "j":
        var audio=new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
    case "k":
        var audio=new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
    case "l":
        var audio=new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
    default:
        console.log(key);
  }
}
function buttonAnimation(key){
  var buttonToAnimate=document.querySelector("."+key);
  buttonToAnimate.classList.add("pressed");
  setTimeout(function () {
    buttonToAnimate.classList.remove("pressed");
  }, 100);
}
