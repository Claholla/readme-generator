// Application dependency requirements
const inquirer = require("inquirer");
const fs = require("fs");

// Inquirer prompt for userResponse data
inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?",
            validate: (answer) => {
                if (answer.length < 1) {
                    return console.log("You must enter a project title to continue.");
                }
                return true;
            },
        },
        {
            type: "input",
            name: "description",
            message: "Enter a brief description of your project",
            validate: (answer) => {
                if (answer.length < 1) {
                    return console.log("You must enter a description to continue.");
                }
                return true;
            },
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
            name: "contributionreq",
            message: "Enter any instructions for contribution to your project",
        },
        {
            type: "list",
            name: "license",
            message: "Choose a license for your project",
            choices: ["BSD", "MIT", "GPL"],
        },
        {
            
        }
    ])

// Generate readme function
const genReadme = (userResponse) => {
    `# ${userResponse.title}
    
    ## Description

    ${userResponse.description}

    ## Table of Contents

    - [Installation](#installation)
    - [Usage](#usage)
    - [Contribution](#contribution)
    - [Credits](#credits)
    - [License](#license)

    ## Installation

    ${userResponse.installation}


    `
};
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
