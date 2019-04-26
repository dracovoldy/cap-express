const express = require('express');
const pool = require('../data/config');
const PDFDocument = require('../modules/pdf');
const router = express.Router();

router.post('/', (req, res) => {
    const doc = new PDFDocument();
    // let filename = req.body.filename
    let filename = "test-pdf"
    // Stripping special characters
    filename = encodeURIComponent(filename) + '.pdf'
    // Setting response to 'attachment' (download).
    // If you use 'inline' here it will automatically open the PDF
    res.setHeader('Content-disposition', 'attachment; filename="' + filename + '"')
    res.setHeader('Content-type', 'application/pdf')

    //content
    const table0 = {
        headers: ['Word', 'Comment', 'Summary'],
        rows: [
            ['Apple', 'Not this one', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra at ligula gravida ultrices. Fusce vitae pulvinar magna.'],
            ['Tire', 'Smells like funny', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra at ligula gravida ultrices. Fusce vitae pulvinar magna.']
        ]
    };

    doc.table(table0, {
        prepareHeader: () => doc.font('Helvetica-Bold'),
        prepareRow: (row, i) => doc.font('Helvetica').fontSize(12)
    });

    const table1 = {
        headers: ['Country', 'Conversion rate', 'Trend'],
        rows: [
            ['Switzerland', '12%', '+1.12%'],
            ['France', '67%', '-0.98%'],
            ['England', '33%', '+4.44%']
        ]
    };

    doc.moveDown().table(table1, {
        prepareHeader: () => doc.font('Helvetica-Bold'),
        prepareRow: (row, i) => doc.font('Helvetica').fontSize(12)
    });

    doc.end();
});

module.exports = router;
