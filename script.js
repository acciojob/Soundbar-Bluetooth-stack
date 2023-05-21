//your JS code here. If required.
const but = document.querySelectorAll(".btn");

for(let i=0; i<but.length; i++){
  but[i].addEventListener('click', function(){
    let key = this.innerHTML;
    PlayingAudio(key);
	  // alert(key);
  })
}

function PlayingAudio(keys){
  if(keys === "applause"){
    let audio = new Audio('sounds/music_1.mp3');
    audio.play();
	  // alert('cli');
  }
  else if(keys === "bao"){
    let audio = new Audio('sounds/bao.mp3');
    audio.play();
  }
  else if(keys === "gasp"){
    let audio = new Audio('sounds/gasp.mp3');
    audio.play();
  } 
  else if(keys === "tada"){
    let audio = new Audio('sounds/tada.mp3');
    audio.play();
  }
  else if(keys === "victory"){
    let audio = new Audio('sounds/victory.mp3');
    audio.play();
  }
  else if(keys === "wrong"){
    let audio = new Audio('sounds/wrong.mp3');
    audio.play();
  }
  else if(keys === "stop"){
    // let audio = new Audio('sounds/stop.wav');
    audio.pause();
  }
   
}