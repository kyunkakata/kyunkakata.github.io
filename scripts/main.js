let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myImage.onclick = () => {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/image1.png') {
    myImage.setAttribute('src', 'images/image2.png');
  } else {
    myImage.setAttribute('src', 'images/image1.png');
  }
}

myButton.onclick = () => {
  setUserName();
}

let setUserName = () => {
  let myName = prompt('Please enter your name:');
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = `${myName} is a cool guy`;
  }
 
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storeName = localStorage.getItem('name');
  myHeading.textContent = `${storeName} is a cool guy`;
}