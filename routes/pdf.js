const express = require('express');
const pool = require('../data/config');
const PDFDocument = require('../modules/pdf');
const router = express.Router();

router.get('/:id', (req, res) => {
    const doc = new PDFDocument();
    // let filename = req.body.filename
    let filename = "test-pdf"
    // Stripping special characters
    filename = encodeURIComponent(filename) + '.pdf'
    // Setting response to 'attachment' (download).
    // If you use 'inline' here it will automatically open the PDF
    res.setHeader('Content-disposition', 'attachment; filename="' + filename + '"')
    res.setHeader('Content-type', 'application/pdf')

    const estimateId = req.params.id;

    pool.query('SELECT * FROM cust_estimates as i WHERE i.entry_id = ?', [estimateId], (error, result) => {
        if (error) {
            throw error;
        } else {
            //content
            const table0 = {
                headers: ['Client Fields', 'Data'],
                rows: [
                    ['Company', result.comp_name],
                    ['Sector/Market unit', 'Smells like funny'],
                    ['Primary region', 'Where are you'],
                    ['Client name(s)', result.client_name],
                    ['Title', 'SomeTitle'],
                    ['Email', result.client_contact]
                ]
            };

            doc.table(table0, {
                prepareHeader: () => doc.font('Helvetica-Bold'),
                prepareRow: (row, i) => doc.font('Helvetica').fontSize(12)
            });

            const table1 = {
                headers: ['Name', 'Email', 'Phone'],
                rows: [
                    [result.cap_name, result.cap_email, result.cap_phone]
                ]
            };

            

            doc.moveDown().table(table2, {
                prepareHeader: () => doc.font('Helvetica-Bold'),
                prepareRow: (row, i) => doc.font('Helvetica').fontSize(12)
            });

            doc.pipe(res);
            doc.end();
        }

        // res.send(result);
    });


});

module.exports = router;
