var audio = new Audio('assets/bark.mp3');
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

function playSound(){
    audio.play();
  }

function formAlert(){
  alert("The form totally works and your input was 100% submitted.");
  window.location.reload();
}