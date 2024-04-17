#! /usr/bin/env node
//this line is called shebang .it tells the operating system to run it with node.js
//import the "inquirer" module , which is a command line interface for Node.js.
import inquirer from "inquirer";
// declare a constant variable `answers` and assign it to the result of the inquirer.prompt function
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word: ",
    },
]);
const words = answers.Sentence.trim().split(" ");
//print the array of words in the console
console.log(words);
//print the word count of the sentence to the console
console.log(`Your sentence word count is ${words.length}`);
