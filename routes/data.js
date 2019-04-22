const express = require('express');
const pool = require('../data/config');
const router = express.Router();

router.get('/:id', (req, res) => {
    const estimateId = req.params.estimateId;
    const oEstimate = {};
    const oWeights = {};

    oWeights.loc_a = 0.077 * 1000;
    oWeights.loc_b = 0.077 * 1000;
    oWeights.loc_c = 0.077 * 1000;
    oWeights.loc_d = 0.077 * 1000;

    

    pool.query('SELECT * FROM cust_estimates as i WHERE i.entry_id = ?', [estimateId], (error, result) => {
        if (error){
            throw error;
        }else{
            



            res.send(result);
        }        
    });
});

module.exports = router;
