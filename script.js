//your JS code here. If required.
const but = document.querySelectorAll(".sound");

for(let i=0; i<but.length; i++){
  but[i].addEventListener('click', function(){
    let key = this.innerHTML;
    makeSound(key);
	  alert(key);
  })
}

function makeSound(keys){
  if(keys === "applause"){
    let aud = new Audio('sounds/applause.mp3');
    aud.play();
  }
  else if(keys === "bao"){
    let aud = new Audio('sounds/bao.mp3');
    aud.play();
  }
  else if(keys === "gasp"){
    let aud = new Audio('sounds/gasp.mp3');
    aud.play();
  }
  else if(keys === "tada"){
    let aud = new Audio('sounds/tada.mp3');
    aud.play();
  }
  else if(keys === "victory"){
    let aud = new Audio('sounds/victory.mp3');
    aud.play();
  }
  else if(keys === "wrong"){
    let aud = new Audio('sounds/wrong.mp3');
    aud.play();
  }
  else if(keys === "stop"){
    let aud = new Audio('sounds/stop.mp3');
    aud.play();
  }
  
}