const fs = require('fs');
const pdf = require('pdf-parse');

const dataBuffer = fs.readFileSync('PageSpeed Insights.pdf');

pdf(dataBuffer).then(function (data) {
    console.log(data.text);
}).catch(err => {
    console.error("Error reading pdf:", err);
});
