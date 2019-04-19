const express = require('express');
const pool = require('../data/config');
const router = express.Router();

<<<<<<< HEAD
router.get('/', (req, res) => {

    pool.query('SELECT * FROM cust_estimates', (error, result) => {
        if (error) throw error;

        res.send(result);
    });

=======
router.get('/', (req, res) => {     
            pool.query('SELECT * FROM cust_estimates', (error, result) => {
            if (error) throw error;

            res.send(result);
        });    
>>>>>>> 17eb159b36ac02aae58418cdc1ef311fb30be86d
});

router.get('/:id', (req, res) => {
    const estimateId = req.params.estimateId;

    pool.query('SELECT * FROM cust_estimates as i WHERE i.entry_id = ?', [estimateId], (error, result) => {
        if (error) throw error;

        res.send(result);
    });
});

router.post('/', function (req, res) {

    let oValue = req.body;

    if (!oValue) {
        return res.status(400).send({ error: true, message: 'Please provide values' });
    }

    pool.query("INSERT INTO cust_estimates SET ? ", oValue, function (error, results, fields) {
        if (error) throw error;
        return res.status(201).send(results);
    });
});

module.exports = router;
