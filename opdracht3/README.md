# Browser Technologies
//Robuuste, toegankelijke websites leren bouwen …

## Opdracht 3 - Progressive Enhanced Browser Technologies
//Browser Technologies onderzoeken en implementeren als enhancement. Basic functionaliteit van een use case doorgronden.

Maak een demo op basis van een use case. Zorg dat alle gebruikers, met alle browsers, in iedere context minimaal de core functionaliteit te zien/horen/voelen krijgen. Bouw je demo in 3 lagen, volgens het principe van Progressive Enhancement. Gebruik als enhanced feature een (hippe, innovatieve, vooruitstrevende) Browser Technologie die je gaat onderzoeken op functionaliteit, toegankelijkheid en (browser) ondersteuning.

Beoordelingscriteria
- De code staat in een repository op GitHub
- Er is een Readme toegevoegd met daarin beschreven:
  - een beschrijving van de core functionality
  - een beschrijving van de feature(s)/Browser Technologies
  - welke browser de feature(s) wel/niet ondersteunen
  - een beschrijving van de accessibility issues die zijn onderzocht
- De demo is opgebouwd in 3 lagen, volgens het principe van Progressive Enhancement
- De user experience van de demo is goed
  - de leesbaarheidsregels zijn toegepast, contrast en kleuren kloppen
  - het heeft een gebruiksvriendelijke interface, met gebruikmaking van affordance en feedback op de interactieve elementen
- Student kan uitleggen wat Progressive Enhancement en Feature Detectie is en hoe dit toe te passen in Web Development.

## Core functionality
Making sound on keypress or on click.
To make the core functionality the app needs to be accessible through server-side.

## Enhancement
Changing to mario theme. The sounds will be replaced with mario sounds and will get some animations.

## Feature detections
I've used most of the mast basic javascript to prevent the feature issues by browsers. I used some of the most basic JS functions that work in every browser no matter what version or what browser there is.

### Preventing
```javascript
var html = document.getElementsByTagName('html')[0]

for (var i = 0; i < keys.length; i++){
  keys[i].addEventListener('click', playSound)
}

function marioSwitch(){
  var y = 0;
  var colours = ['#6D8BFB','#E05F26','#B9F538',"fff"]
  html.style.backgroundColor = "#fff";
  h1.style.color ="#6D8BFB"
  h1.innerHTML = "Mario time"

  for ( y; y<keys.length; y++){
    keys[y].style.color = "#B9F538";
  }
}


```

### Feature detection
Will check if the `addEventListener` is accessible in the document.  
If it isn't in the document use the attachEvent.
```Javascript
function onClickEvent(el, item){
  if (document.addEventListener) {
    el.addEventListener('keydown', item);
  } else {
    el.attachEvent('keydown', item);
  }
}
```

### ES6 to ES5
Es6 using const and arrowkeys
```Javascript
const keys = document.querySelectorAll('.key');
const audio =
document.querySelector(`audio[data-key="${e.keyCode}"]`);
const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

keys.forEach(key => key.addEventListener('transitionend',removeTransition));
keys.forEach(key => key.addEventListener('click', playSound))


```

Es5 instead of using arrow and for each functions I used for loops.  

```Javascript
var keys = document.querySelectorAll('.key');
var audio = document.querySelector("audio[data-key=" + "'" + keycode + "'" + "]");
var key = document.querySelector(".key[data-key=" + "'" + keycode + "'"+ "]");

for (var x = 0; x < keys.length; x++) {
  keys[x].addEventListener('transitionend', removeTransition)
}

for (var i = 0; i < keys.length; i++){
  keys[i].addEventListener('click', playSound)
}



```
## Features die wel en niet ondersteund worden door browsers

## accessibility

## User experience

## Kleur en contrast
