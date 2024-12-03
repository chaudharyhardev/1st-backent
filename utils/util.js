// const path = require('path');
// module.export = path.dirname(require.main.filename);

const path = require('path');
const rootDir = path.dirname(require.main.filename); // This gives the root directory of your project
module.exports = rootDir;
