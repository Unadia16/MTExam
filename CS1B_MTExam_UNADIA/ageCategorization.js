//Coding Problem 3
//UNADIA AARUME XANDER BSCS-1B 
let age = prompt("Enter your age my friend:");//Prompting user to enter their age.

//Using a IF ELSE statement to categorize the user age.
if (age < 5) {
    console.log("You are still a Toddler");
}else if (age > 5 && age <= 12) {
    console.log("You are still a Child");
}else if (age >= 13 && age <= 19) {
    console.log("You're a Teenager");
}else if (age >= 20 && age <= 35) {
    console.log("You're already an Young Adult");
}else if (age >= 36 && age <= 60) {
    console.log("You are in Middle Aged");
}else{
    console.log("You're already a Senior");
}
