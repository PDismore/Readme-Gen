// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'none'){
    return''
  }
  return `(https://img.shields.io/badge/license-${license}-brightgreen)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
    return `- [License](#license)`
  }
  return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'none') {
    return ''
  }
    return `
  ## License
  Licensed und the ${license} license
    `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {username, email, title, description, installation, usage, contribution, test, license} = data
  return `
  # ${title}
  ${renderLicenseBadge(license)}
  # Contents Table
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Test](#test)
  - [Questions](#questions)
  ${renderLicenseLink(license)}
  ## Description
  ${description}
  ## Installation
  ${installation}
  ## Usage
  ${usage}
  ## Contributing
  ${contribution}
  ## Test
  ${test}
  # Questions
  [My Github](https://github.com/${username})
  For any addtional questions please contact me at ${email}
  ${renderLicenseSection(license)}

`;
}

module.exports = generateMarkdown;
