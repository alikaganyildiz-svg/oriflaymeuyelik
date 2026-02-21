const fs = require('fs');
const PDFParser = require('pdf2json');
const pdfParser = new PDFParser(this, 1);

pdfParser.on('pdfParser_dataReady', pdfData => {
    fs.writeFileSync('parsed_pdf.txt', pdfParser.getRawTextContent());
    console.log("Saved to parsed_pdf.txt");
});

pdfParser.loadPDF('PageSpeed Insights.pdf');
