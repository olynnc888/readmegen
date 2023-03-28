// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
    
  return `![License](https://img.shields.io/badge/license-${license.toLowerCase().replace(/ /g, '%20')}-green.svg)`;
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  
  return `https://opensource.org/licenses/${license.toLowerCase().replace(/ /g, '-')}`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  
  return `
## License

This project is licensed under the ${license} license.
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `
# Project Title
  ${data.Title}
  ${licenseBadge}

## Project Description
  ${data.Description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
- [Tests](#tests)
- [Contact](#contact)
  
## Installation
  ${data.installation}

## Usage
  ${data.usage}

## License
  ${licenseSection}
  ${licenseLink}

## Contributions
  ${data.contributions}

## Tests
  ${data.tests}

## Contact
  * Github: ${data.gituser}
  * Email: ${data.emailuser}
  
  `;
}

module.exports = generateMarkdown;
