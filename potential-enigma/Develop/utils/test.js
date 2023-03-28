const generateMarkdown = require('./generateMarkdown');

const data = {
  Title: 'My Project',
  Description: 'This is a sample project.',
  installation: 'npm install',
  usage: 'node index.js',
  license: 'MIT',
  contributions: 'Contributions are welcome!',
  tests: 'npm test',
  gituser: 'mygithubusername',
  emailuser: 'myemail@example.com',
};

console.log(generateMarkdown(data));