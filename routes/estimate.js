const express = require('express');
const pool = require('../data/config');
const router = express.Router();

router.get('/', (req, res) => {
    const company = req.query.company;
    const sector = req.query.sector;
    const region = req.query.region;
    const client_name = req.query.client;
    const client_email = req.query.client_email;

    console.log(company);
    console.log(sector);
    console.log(region);
    console.log(client_name);
    console.log(client_email);

    if (company) {
        
        pool.query('SELECT * FROM cust_estimates WHERE comp_name LIKE ?', [("%" + company + "%")], (error, result) => {
            if (error) throw error;

            res.send(result);
        });
    } else if (sector) {
        pool.query('SELECT * FROM cust_estimates WHERE comp_sector = ?', [sector], (error, result) => {
            if (error) throw error;

            res.send(result);
        });
    } else if (region) {
        pool.query('SELECT * FROM cust_estimates WHERE comp_region = ?', [region], (error, result) => {
            if (error) throw error;

            res.send(result);
        });
    } else if (client_name) {
        pool.query('SELECT * FROM cust_estimates WHERE client_name LIKE ?', [("%" + client_name + "%")], (error, result) => {
            if (error) throw error;

            res.send(result);
        });
    } else if (client_email) {
        pool.query('SELECT * FROM cust_estimates WHERE client_contact = ?', [("%" + client_email + "%")], (error, result) => {
            if (error) throw error;

            res.send(result);
        });
    }else {
        pool.query('SELECT * FROM cust_estimates', (error, result) => {
            if (error) throw error;
    
            res.send(result);
        });
    }

    
});

router.get('/:id', (req, res) => {
    const estimateId = req.params.id;
    
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

router.put('/:id', function (req, res) {

    const estimateId = req.params.id;

    let oValue = req.body;

    if (!estimateId) {
        return res.status(400).send({ error: true, message: 'Please provide estimateId' });
    }

    if (!oValue) {
        return res.status(400).send({ error: true, message: 'Please provide values' });
    }

    pool.query("UPDATE cust_estimates SET ? WHERE entry_id = ?", [oValue, estimateId], function (error, results, fields) {
        if (error) throw error;
        return res.status(202).send(results);
    });
});

module.exports = router;
