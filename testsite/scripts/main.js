// document.querySelector("html").addEventListener("click", function()
//   {
//     alert("You bastard!");
//   });

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");

  if(mySrc === "images/HK47-game.png") {
    myImage.setAttribute("src", "images/Coder.png");
  } else {
    myImage.setAttribute("src", "images/HK47-game.png");
  }
};


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `I'm super cool, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `I'm super cool, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};
