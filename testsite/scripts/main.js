let lightmodetoggled = false;
function lightModeToggle() {
  const sheet = new CSSStyleSheet();

  sheet.insertRule(`body {
    background-color: white;
  }`);
  sheet.insertRule(`p {
    color: black;
  }`);
  sheet.insertRule(`html {
    background-color: white; 
  }`);
  sheet.insertRule(`button {
    background-color: white; 
    color: black;
  }`);
  if(!lightmodetoggled)
  {
    document.adoptedStyleSheets = [sheet];
    document.getElementById("test").innerText = "Dark Mode";
    changeCatGif();
    lightmodetoggled = true;
  }

  else {
    document.adoptedStyleSheets = [];
    document.getElementById("test").innerText = "Light Mode";
    changeCatGif();
    lightmodetoggled = false;
  }
}

function changeCatGif() {
  let catgif = document.getElementById("catgif");
  let keyboardsound = document.getElementById("keyboardsound");
  if(!lightmodetoggled){
    catgif.setAttribute("src", "images/LightModeCat1.gif");
    setTimeout("catgif.hidden = true;", 650);
    keyboardsound.pause();
    keyboardsound.currentTime = 0;
    flashbang();
  }
  else { 
    catgif.hidden = false;
    catgif.setAttribute("src", "images/DarkModeCat2.gif");
    keyboardsound.play();
  }
}

function flashbang() { 
  let thurston = new Audio('sounds/thurston_shrimpin_cut.mp3');
  thurston.play();
}
