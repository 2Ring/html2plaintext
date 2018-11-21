const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'html2plaintext.js',
        path: path.resolve(__dirname, 'dist')
    }
};