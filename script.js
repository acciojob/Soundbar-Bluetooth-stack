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
	let audio;
  if(keys === "applause"){
    audio = new Audio('sounds/music_1.mp3');
    audio.play();
  }
  else if(keys === "bao"){
    audio = new Audio('sounds/bao.mp3');
    audio.play();
  }
  else if(keys === "gasp"){
    audio = new Audio('sounds/gasp.mp3');
    audio.play();
  } 
  else if(keys === "tada"){
    audio = new Audio('sounds/tada.mp3');
    audio.play();
  }
  else if(keys === "victory"){
    audio = new Audio('sounds/victory.mp3');
    audio.play();
  }
  else if(keys === "wrong"){
    audio = new Audio('sounds/wrong.mp3');
    audio.play();
  } 
	document.querySelector('.stop').addEventListener('click', ()=>{
		audio.pause();
	})
}