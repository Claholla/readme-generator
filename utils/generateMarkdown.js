
// Generates markdown for export
function generateMarkdown(data) {
  if (data.license === "BSD") {
    data.badge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    data.link = "https://opensource.org/licenses/BSD-3-Clause";
  } else if (data.license === "MIT") {
    data.badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    data.link = "https://opensource.org/licenses/MIT";
  } else if (data.license === "GPL") {
    data.badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    data.link = "https://www.gnu.org/licenses/gpl-3.0";
  } else {
    return "";
  }
  
  
  return `
  # ${data.title}
  
  ## Description

  ${data.description}
  ${data.badge}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contribution}

  ## Tests

  ${data.tests}

  ## License

  This application is licensed under: [${data.license}](${data.link})

  ## Questions

  For any questions, contact the author: [${data.github}](https://www.github.com/${data.github}) at ${data.email}.

  `;
}

module.exports = generateMarkdown;
