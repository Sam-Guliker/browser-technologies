// Main function
var keys = document.querySelectorAll('.key');
var img = document.getElementsByTagName('img')[0]
var html = document.getElementsByTagName('html')[0]
var h1 = document.getElementsByTagName('h1')[0]


function removeAudioControlls(){
  var audioControls = document.getElementsByTagName('audio')
  var f

  for(f = 0; f < audioControls.length; f++){
    audioControls[f].controls = false;
  }
}
removeAudioControlls()

function playSound(e){
  var keycode = e.keyCode ? e.keyCode : e.target.parentNode.getAttribute('data-key')
  var audio = document.querySelector("audio[data-key=" + "'" + keycode + "'" + "]");
  var key = document.querySelector(".key[data-key=" + "'" + keycode + "'"+ "]");

  if(!audio) return; // stopt de functie

  audio.currentTime =  0; // rewind to the start
  audio.play();

  key.classList.add('playing')
};

function removeTransition(e){
  if(e.propertyName !== 'transform') return; // skip if it's not a transform
  this.classList.remove('playing')
}

for (var x = 0; x < keys.length; x++) {
  keys[x].addEventListener('transitionend', removeTransition)
}

for (var i = 0; i < keys.length; i++){
  keys[i].addEventListener('click', playSound)
}

window.addEventListener('keydown', playSound);

// Fuction detection
function onClickEvent(el, item){
  if (document.addEventListener) {
    el.addEventListener('keydown', item);
  } else {
    el.attachEvent('keydown', item);
  }
}
