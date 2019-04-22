const express = require('express');
const pool = require('../data/config');
const router = express.Router();

router.get('/:id', (req, res) => {
    const estimateId = req.params.id;
    
    const oEstimate = {};
    const oWeights = {};

    //Plants
    oWeights.loc_a1 = {};
    oWeights.loc_a1.fix = 1;
    oWeights.loc_a1.iHrs = 100;
    oWeights.loc_a1.cHrs = 150;

    oWeights.loc_b1 = {};
    oWeights.loc_b1.fix = 1;
    oWeights.loc_b1.iHrs = 100;
    oWeights.loc_b1.cHrs = 200;

    oWeights.loc_c1 = {};
    oWeights.loc_c1.fix = 1;
    oWeights.loc_c1.iHrs = 100;
    oWeights.loc_c1.cHrs = 100;

    oWeights.loc_d1 = {};
    oWeights.loc_d1.fix = 1;
    oWeights.loc_d1.iHrs = 100;
    oWeights.loc_d1.cHrs = 300;    

    //DCs
    // oWeights.loc_a2.fix = 1;
    // oWeights.loc_a2.iHrs = 100;
    // oWeights.loc_a2.cHrs = 150;

    // oWeights.loc_b2.fix = 1;
    // oWeights.loc_b2.iHrs = 100;
    // oWeights.loc_b2.cHrs = 150;

    // oWeights.loc_c2.fix = 1;
    // oWeights.loc_c2.iHrs = 100;
    // oWeights.loc_c2.cHrs = 150;

    // oWeights.loc_d2.fix = 1;
    // oWeights.loc_d2.iHrs = 100;
    // oWeights.loc_d2.cHrs = 150;    

    // //Sales
    // oWeights.loc_a3.fix = 1;
    // oWeights.loc_a3.iHrs = 100;
    // oWeights.loc_a3.cHrs = 150;

    // oWeights.loc_b3.fix = 1;
    // oWeights.loc_b3.iHrs = 100;
    // oWeights.loc_b3.cHrs = 150;

    // oWeights.loc_c3.fix = 1;
    // oWeights.loc_c3.iHrs = 100;
    // oWeights.loc_c3.cHrs = 150;

    // oWeights.loc_d3.fix = 1;
    // oWeights.loc_d3.iHrs = 100;
    // oWeights.loc_d3.cHrs = 150; 

    // //Offices
    // oWeights.loc_a4.fix = 1;
    // oWeights.loc_a4.iHrs = 100;
    // oWeights.loc_a4.cHrs = 150;

    // oWeights.loc_b4.fix = 1;
    // oWeights.loc_b4.iHrs = 100;
    // oWeights.loc_b4.cHrs = 150;

    // oWeights.loc_c4.fix = 1;
    // oWeights.loc_c4.iHrs = 100;
    // oWeights.loc_c4.cHrs = 150;

    // oWeights.loc_d4.fix = 1;
    // oWeights.loc_d4.iHrs = 100;
    // oWeights.loc_d4.cHrs = 150; 

    // oWeights.lob_bus = 0.077 * 1000;
    // oWeights.lob_seg = 0.077 * 1000;


    //LOB
    oWeights.lob_ftm = {};
    oWeights.lob_ftm.fix = 15;
    oWeights.lob_ftm.cHrs = 1200;
    oWeights.lob_ftm.iHrs = 50;

    oWeights.lob_ptp = {};
    oWeights.lob_ptp.fix = 15;
    oWeights.lob_ptp.cHrs = 1200;
    oWeights.lob_ptp.iHrs = 50;

    oWeights.lob_mts = {};
    oWeights.lob_mts.fix = 15;
    oWeights.lob_mts.cHrs = 1200;
    oWeights.lob_mts.iHrs = 50;

    oWeights.lob_otc = {};
    oWeights.lob_otc.fix = 15;
    oWeights.lob_otc.cHrs = 1200;
    oWeights.lob_otc.iHrs = 50;

    oWeights.lob_dts = {};
    oWeights.lob_dts.fix = 15;
    oWeights.lob_dts.cHrs = 1200;
    oWeights.lob_dts.iHrs = 50;   

    oWeights.lob_oth = {};
    oWeights.lob_oth.fix = 15;
    oWeights.lob_oth.cHrs = 1200;
    oWeights.lob_oth.iHrs = 50;

    //scope
    oWeights.scope_ints = {};
    oWeights.scope_ints.fix = 70;
    oWeights.scope_ints.cHrs = 300;
    oWeights.scope_ints.iHrs = 10;

    oWeights.scope_unts = {};
    oWeights.scope_unts.fix = 200;
    oWeights.scope_unts.cHrs = 500;
    oWeights.scope_unts.iHrs = 2;

    oWeights.scope_user = {};
    oWeights.scope_user.fix = 50;
    oWeights.scope_user.cHrs = 250;
    oWeights.scope_user.iHrs = 1;

    oWeights.lang = {};
    oWeights.lang.fix = 1;
    oWeights.lang.cHrs = 100;
    oWeights.lang.iHrs = 50;

    //infra
    oWeights.inst = {};
    oWeights.inst.fix = 1;
    oWeights.inst.cHrs = 1000;
    oWeights.inst.iHrs = 200;

    oWeights.saplvl = {};
    oWeights.saplvl.fix = 1;
    oWeights.saplvl.cHrs = 500;
    oWeights.saplvl.iHrs = 500;

    oWeights.consys = {};
    oWeights.consys.fix = 1;
    oWeights.consys.cHrs = 500;
    oWeights.consys.iHrs = 200;

    oWeights.keySap = {};
    oWeights.keySap.fix = 1;
    oWeights.keySap.cHrs = 250;
    oWeights.keySap.iHrs = 100;

    oWeights.size = {};
    oWeights.size.fix = 1;
    oWeights.size.cHrs = 200;
    oWeights.size.iHrs = 50;    

    //development
    oWeights.edi = {};
    oWeights.edi.fix = 1;
    oWeights.edi.cHrs = 200;
    oWeights.edi.iHrs = 50;  

    oWeights.middle = {};
    oWeights.middle.fix = 1;
    oWeights.middle.cHrs = 200;
    oWeights.middle.iHrs = 50;  

    oWeights.ricefw = {};
    oWeights.ricefw.fix = 1;
    oWeights.ricefw.cHrs = 200;
    oWeights.ricefw.iHrs = 50; 

    pool.query('SELECT * FROM cust_estimates as i WHERE i.entry_id = ?', [estimateId], (error, result) => {
        if (error){
            throw error;
        }else{
            //scope
            //locations
            var c_loc1 = 0;
            var c_loc2 = 0;
            var c_loc3 = 0;
            var c_loc4 = 0;

            var res_line = result[0];

            c_loc1 = res_line.sc_loc_apac_va + res_line.sc_loc_eu_va + res_line.sc_loc_latam_va + res_line.sc_loc_na_va;
            console.log("loc 1 ", c_loc1);
            c_loc2 = res_line.sc_loc_apac_vb + res_line.sc_loc_eu_vb + res_line.sc_loc_latam_vb + res_line.sc_loc_na_vb;
            c_loc3 = res_line.sc_loc_eu_vc + res_line.sc_loc_eu_vc + res_line.sc_loc_latam_vc + res_line.sc_loc_na_vc;
            c_loc4 = res_line.sc_loc_apac_vd + res_line.sc_loc_eu_vd + res_line.sc_loc_latam_vd + res_line.sc_loc_na_vd;            

            var c_loc1_m = (oWeights.loc_a1.fix * oWeights.loc_a1.cHrs) + ((c_loc1 - oWeights.loc_a1.fix) * oWeights.loc_a1.iHrs);
            var c_loc2_m = (oWeights.loc_b1.fix * oWeights.loc_b1.cHrs) + ((c_loc2 - oWeights.loc_b1.fix) * oWeights.loc_b1.iHrs);
            var c_loc3_m = (oWeights.loc_c1.fix * oWeights.loc_c1.cHrs) + ((c_loc3 - oWeights.loc_c1.fix) * oWeights.loc_c1.iHrs);
            var c_loc4_m = (oWeights.loc_d1.fix * oWeights.loc_d1.cHrs) + ((c_loc4 - oWeights.loc_d1.fix) * oWeights.loc_d1.iHrs);

            //final LOC
            var addLoc = c_loc1_m + c_loc2_m + c_loc3_m + c_loc4_m;

            //lobs
            var addFTM = 0;
            if(res_line.sc_bp_ftm > 0){
                addFTM = oWeights.lob_ftm.cHrs;
            }

            var addPTP = 0;
            if(res_line.sc_bp_ptp > 0){
                addPTP = oWeights.lob_ptp.cHrs;
            }

            var addMTS = 0;
            if(res_line.sc_bp_mts > 0){
                addMTS = oWeights.lob_mts.cHrs;
            }

            var addOTC = 0;
            if(res_line.sc_bp_otc > 0){
                addOTC = oWeights.lob_otc.cHrs;
            }

            var addDTS = 0;
            if(res_line.sc_bp_dts > 0){
                addDTS = oWeights.lob_dts.cHrs;
            }
            //final LOB
            var addLOB = addFTM + addPTP + addMTS + addOTC + addDTS;

            //ints
            var addInts = oWeights.scope_ints.cHrs + ((res_line.sc_ints_v - oWeights.scope_ints.fix) * oWeights.scope_ints.iHrs);

            //unts
            var addUnts = oWeights.scope_unts.cHrs + ((res_line.sc_unts_v - oWeights.scope_unts.fix) * oWeights.scope_unts.iHrs);
            
            //users       
            var addUser = oWeights.scope_user.cHrs + ((res_line.sc_user_v - oWeights.scope_user.fix) * oWeights.scope_user.iHrs);

            //lang
            var addLang = oWeights.lang.cHrs + ((res_line.sc_lang_v - oWeights.lang.fix) * oWeights.lang.iHrs);

            //infra
            //instance
            var addInstance = oWeights.inst.cHrs + ((res_line.if_psap_v - oWeights.inst.fix) * oWeights.inst.iHrs);

            //pack lvl
            var addPack = oWeights.consys.cHrs + ((res_line.if_syscon_v - oWeights.consys.fix) * oWeights.consys.iHrs);

            //key SAP
            var addKeySAP = (res_line.if_key_arib_v + res_line.if_key_conc_v + res_line.if_key_conc_v +
                res_line.if_key_sf_v + res_line.if_key_solm_v + res_line.if_key_ewm_v + res_line.if_key_gts_v +
                res_line.if_key_attp_v + res_line.if_key_tms_v + res_line.if_key_apo_v + res_line.if_key_vistx_v +
                res_line.if_key_mdg_v + res_line.if_key_optx_v + res_line.if_key_others_v) * oWeights.keySap.cHrs;
                
            //sizeSAP
            var addSize = oWeights.size.cHrs + ((res_line.if_sysize_v - oWeights.size.fix) * oWeights.size.iHrs);

            //development
            //edi
            var addEDI = oWeights.edi.cHrs + ((res_line.if_dev_edi_v - oWeights.edi.fix) * oWeights.edi.iHrs);

            //middle
            var addMiddle = oWeights.middle.cHrs + ((res_line.if_dev_mdlw_v - oWeights.middle.fix) * oWeights.middle.iHrs);

            //ricefw
            var addRICEFW = oWeights.ricefw.cHrs + ((res_line.if_dev_ricefw_v - oWeights.ricefw.fix) * oWeights.ricefw.iHrs);

            //add all
            var finalAdd = addLoc + addLOB + addInts + addUnts + addUser + addLang + addInstance + addPack + addSize +
                            addEDI + addMiddle + addRICEFW;

            oEstimate.finalAdd = finalAdd;     
            oEstimate.result = result;       
                
            res.send(oEstimate);
        }        
    });
});

module.exports = router;
