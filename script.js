//your JS code here. If required.
const but = document.querySelectorAll(".btn");

for(let i=0; i<but.length; i++){
  but[i].addEventListener('click', function(){
    let key = this.innerHTML;
    makeSound(key);
	  // alert(key);
  })
}

function makeSound(keys){
  if(keys === "applause"){
    let audio = new Audio('sounds/applause.wav');
    audio.play();
	  // alert('cli');
  }
  else if(keys === "bao"){
    let audio = new Audio('sounds/bao.wav');
    audio.play();
  }
  else if(keys === "gasp"){
    let audio = new Audio('sounds/gasp.wav');
    audio.play();
  } 
  else if(keys === "tada"){
    let audio = new Audio('sounds/tada.wav');
    audio.play();
  }
  else if(keys === "victory"){
    let audio = new Audio('sounds/victory.wav');
    audio.play();
  }
  else if(keys === "wrong"){
    let audio = new Audio('sounds/wrong.wav');
    audio.play();
  }
  else if(keys === "stop"){
    // let audio = new Audio('sounds/stop.wav');
    audio.pause();
  }
   
}