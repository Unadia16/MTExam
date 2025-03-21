//Coding problem 4
//UNADIA, AARUME XANDER BSCS-1B 
let theFavNumber = 24;//Declaring the favorite number.
let userGuess = prompt("Enter your guess my friend:"); //Prompting the user to enter their guess number.
let attempts = 0;//Initialize.

//Looping until the user guess the correct number.
while(userGuess !== theFavNumber) {
    userGuess = prompt("Enter your guess my friend:");
    attempts++
}
