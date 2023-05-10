





var buttonOne = document.getElementById("title-one");
console.log(buttonOne);
buttonOne.addEventListener("click", showTextOne);

function showTextOne() {
  var textOne = document.getElementById("text-one");
  textOne.classList.add("show");
}

var buttonHideOne = document.getElementsByClassName("hide")[0];
buttonHideOne.addEventListener("click", hideOne);

function hideOne() {
  var textOne = document.getElementById("text-one");
  textOne.classList.remove("show");
}



var buttonTwo = document.getElementById("title-two");
buttonTwo.addEventListener("click", showTextTwo);

function showTextTwo() {
  var textTwo = document.getElementById("text-two");
  textTwo.classList.add("show");
}

var buttonHideTwo = document.getElementsByClassName("hide")[1];
buttonHideTwo.addEventListener("click", hideTwo);

function hideTwo() {
  var textTwo = document.getElementById("text-two");
  textTwo.classList.remove("show");
}



var buttonThree = document.getElementById("title-three");
buttonThree.addEventListener("click", showTextThree);

function showTextThree() {
  var textThree = document.getElementById("text-three");
  textThree.classList.add("show");
}

var buttonHideThree = document.getElementsByClassName("hide")[2];
buttonHideThree.addEventListener("click", hideThree);

function hideThree() {
  var textThree = document.getElementById("text-three");
  textThree.classList.remove("show");
}

var buttonFour = document.getElementById("title-four");
buttonFour.addEventListener("click", showTextFour);

function showTextFour() {
  var textFour = document.getElementById("text-four");
  textFour.classList.add("show");
}

var buttonHideFour = document.getElementsByClassName("hide")[3];
buttonHideFour.addEventListener("click", hideFour);

function hideFour() {
  var textFour = document.getElementById("text-four");
  textFour.classList.remove("show");
}