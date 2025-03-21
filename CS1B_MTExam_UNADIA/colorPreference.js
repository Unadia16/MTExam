//Coding problem 5
//UNADIA AARUME XANDER BSCS-1B 
let favoriteColors = [];//Declaring an empty array where user will store their three favorite colors.

//Using for loop to collect 3 colors
for (let i=0 ; i < 3; i++) {
    userFavColor = prompt("Enter your favorite color my friend:");
    favoriteColors.push(userFavColor);
    console.log("Updated color list:", favoriteColors);
}

//Prompting the user to add another new color to the list
let userNewColor = prompt("Add a new Color:");
favoriteColors.push(userNewColor);
 
//Logging the final list of colors
console.log("Final Update of color list:", favoriteColors);