import inquirer from "inquirer";
import { types } from "util";

//1) computer will generate a random number

//2) user input for gussing number -

//3) computer user input with computer generated number and show result 


const randomnumber = Math.floor(Math.random() * 10 + 2);

const answers = await inquirer.prompt([
{
name: "userguessednumber",
type: "number",
message: "please guess a number between 1-10",
},
]);

if( answers.userguessednumber === randomnumber){

    console.log("congtratulations! you guessed right number.");

}else {
    console.log("you gussed wrong number");

}