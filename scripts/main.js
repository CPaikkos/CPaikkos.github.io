
var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/P1030093.JPG') {
        myImage.setAttribute('src', 'images/_DSC8116.JPG');
        alert("They're eating me alive!!");
    } else {
        myImage.setAttribute('src', 'images/P1030093.JPG');
    }
}

document.querySelector('html').onclick = function () {
    alert('Ouch! Stop poking me!');
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName () {
    var myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Welcome to my web page " + myName; 
}

if(!localStorage.getItem("name")) {
    setUserName();
} else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Welcome back " + storedName;
}

myButton.onclick = function () {
    setUserName ();
}