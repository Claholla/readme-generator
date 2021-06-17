// Application dependency requirements
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown.js");

// Inquirer prompt for userResponse data
const questions = [
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?",
        },
        {
            type: "input",
            name: "description",
            message: "Enter a brief description of your project",
        },
        {
            type: "input",
            name: "installation",
            message: "Enter any installation instructions for your application",
        },
        {
            type: "input",
            name: "usage",
            message: "Enter any usage instructions for your project",
        },
        {
            type: "input",
            name: "contribution",
            message: "Enter any instructions for contribution to your project",
        },
        {
            type: "input",
            name: "tests",
            message: "Enter any tests you'd like to include in your README for this application",
        },
        {
            type: "list",
            name: "license",
            message: "Choose a license for your project",
            choices: ["BSD", "MIT", "GPL", "Unlicensed"],
        },
        {
            type: "input",
            name: "github",
            message: "What is your GitHub username?",
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?",
        }
    ];



function init() {

// Writes the markdown output to a .md file
inquirer
    .prompt(questions)
    .then(function (data) {
        fs.writeFile(`${data.title}-README.md`, generateMarkdown(data), function (err) {
            if (err) {
                throw err;
            } else {
                console.log("README has been generated successfully.")
            }
        })
    });

};

init();