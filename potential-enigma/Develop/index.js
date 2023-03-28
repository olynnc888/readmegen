// Require inquirer and fs modules
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'Title',
    message: 'Project Title:',
    validate: (input) => {
      if (input.trim() === '') {
        return 'Please enter a project title.';
      }
      return true;
    },
  },
  {
    type: 'input',
    name: 'Description',
    message: 'Project Description:',
    validate: (input) => {
      if (input.trim() === '') {
        return 'Please enter a project description.';
      }
      return true;
    },
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Installation instructions for your project:',
    default: 'npm install',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Usage instructions for your project:',
    default: 'node index.js',
  },
  {
    type: 'input',
    name: 'contributions',
    message: 'Guidelines for contributing to your project:',
    default: 'Contributions are welcome!',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Instructions for running tests on your project:',
    default: 'npm test',
  },
  {
    type: 'list',
    name: 'license',
    message: 'License for your project:',
    choices: ['MIT', 'GNU', 'Apache', 'None'],
    default: 'None',
  },
  {
    type: 'input',
    name: 'gituser',
    message: 'GitHub username:',
    validate: (input) => {
      if (input.trim() === '') {
        return 'Please enter your GitHub username.';
      }
      return true;
    },
  },
  {
    type: 'input',
    name: 'emailuser',
    message: 'Email address:',
    validate: (input) => {
      if (input.trim() === '') {
        return 'Please enter your email address.';
      }
      return true;
    },
  },
];

// Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README.md generated successfully!');
    }
  });
}

// Create a function to initialize app
function init() {
  // Prompt the user for input using inquirer
  inquirer.prompt(questions).then((answers) => {
    // Use the user's responses to generate the README content as a string
    const readmeContent = generateMarkdown(answers);

    // Write the generated README content to a file
    writeToFile('README.md', readmeContent);
  }).catch((err) => {
    console.error(err);
  });
}

// Function call to initialize app
init();