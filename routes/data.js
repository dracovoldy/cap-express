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
    oWeights.ricefw.fix = 25;
    oWeights.ricefw.cHrs = 2500;
    oWeights.ricefw.iHrs = 60;

    pool.query('SELECT * FROM cust_estimates as i WHERE i.entry_id = ?', [estimateId], (error, result) => {
        if (error) {
            throw error;
        } else {
            //scope
            //locations
            var c_loc1 = 0;
            var c_loc2 = 0;
            var c_loc3 = 0;
            var c_loc4 = 0;

            var res_line = result[0];

            var locAPAC_A = 0;
            if (res_line.sc_loc_apac_va.toString() === "0") {
                locAPAC_A = 0;
            } else if (res_line.sc_loc_apac_va.toString() === "1") {
                locAPAC_A = 5;
            } else if (res_line.sc_loc_apac_va.toString() === "3") {
                locAPAC_A = 10;
            } else if (res_line.sc_loc_apac_va.toString() === "4") {
                locAPAC_A = 20;
            } else if (res_line.sc_loc_apac_va.toString() === "5") {
                locAPAC_A = 21;
            }

            var locNA_A = 0;
            if (res_line.sc_loc_na_va.toString() === "0") {
                locNA_A = 0;
            } else if (res_line.sc_loc_na_va.toString() === "1") {
                locNA_A = 5;
            } else if (res_line.sc_loc_na_va.toString() === "3") {
                locNA_A = 10;
            } else if (res_line.sc_loc_na_va.toString() === "4") {
                locNA_A = 20;
            } else if (res_line.sc_loc_na_va.toString() === "5") {
                locNA_A = 21;
            }

            var locEU_A = 0;
            if (res_line.sc_loc_eu_va.toString() === "0") {
                locEU_A = 0;
            } else if (res_line.sc_loc_eu_va.toString() === "1") {
                locEU_A = 5;
            } else if (res_line.sc_loc_eu_va.toString() === "3") {
                locEU_A = 10;
            } else if (res_line.sc_loc_eu_va.toString() === "4") {
                locEU_A = 20;
            } else if (res_line.sc_loc_eu_va.toString() === "5") {
                locEU_A = 21;
            }

            var locLATAM_A = 0;
            if (res_line.sc_loc_latam_va.toString() === "0") {
                locLATAM_A = 0;
            } else if (res_line.sc_loc_latam_va.toString() === "1") {
                locLATAM_A = 5;
            } else if (res_line.sc_loc_latam_va.toString() === "3") {
                locLATAM_A = 10;
            } else if (res_line.sc_loc_latam_va.toString() === "4") {
                locLATAM_A = 20;
            } else if (res_line.sc_loc_latam_va.toString() === "5") {
                locLATAM_A = 21;
            }

            //---------

            var locAPAC_B = 0;
            if (res_line.sc_loc_apac_vb.toString() === "0") {
                locAPAC_B = 0;
            } else if (res_line.sc_loc_apac_vb.toString() === "1") {
                locAPAC_B = 5;
            } else if (res_line.sc_loc_apac_vb.toString() === "3") {
                locAPAC_B = 10;
            } else if (res_line.sc_loc_apac_vb.toString() === "4") {
                locAPAC_B = 20;
            } else if (res_line.sc_loc_apac_vb.toString() === "5") {
                locAPAC_B = 21;
            }

            var locNA_B = 0;
            if (res_line.sc_loc_na_vb.toString() === "0") {
                locNA_B = 0;
            } else if (res_line.sc_loc_na_vb.toString() === "1") {
                locNA_B = 5;
            } else if (res_line.sc_loc_na_vb.toString() === "3") {
                locNA_B = 10;
            } else if (res_line.sc_loc_na_vb.toString() === "4") {
                locNA_B = 20;
            } else if (res_line.sc_loc_na_vb.toString() === "5") {
                locNA_B = 21;
            }

            var locEU_B = 0;
            if (res_line.sc_loc_eu_vb.toString() === "0") {
                locEU_B = 0;
            } else if (res_line.sc_loc_eu_vb.toString() === "1") {
                locEU_B = 5;
            } else if (res_line.sc_loc_eu_vb.toString() === "3") {
                locEU_B = 10;
            } else if (res_line.sc_loc_eu_vb.toString() === "4") {
                locEU_B = 20;
            } else if (res_line.sc_loc_eu_vb.toString() === "5") {
                locEU_B = 21;
            }

            var locLATAM_B = 0;
            if (res_line.sc_loc_latam_vb.toString() === "0") {
                locLATAM_B = 0;
            } else if (res_line.sc_loc_latam_vb.toString() === "1") {
                locLATAM_B = 5;
            } else if (res_line.sc_loc_latam_vb.toString() === "3") {
                locLATAM_B = 10;
            } else if (res_line.sc_loc_latam_vb.toString() === "4") {
                locLATAM_B = 20;
            } else if (res_line.sc_loc_latam_vb.toString() === "5") {
                locLATAM_B = 21;
            }

            //------------


            var locAPAC_C = 0;
            if (res_line.sc_loc_apac_vc.toString() === "0") {
                locAPAC_C = 0;
            } else if (res_line.sc_loc_apac_vc.toString() === "1") {
                locAPAC_C = 5;
            } else if (res_line.sc_loc_apac_vc.toString() === "3") {
                locAPAC_C = 10;
            } else if (res_line.sc_loc_apac_vc.toString() === "4") {
                locAPAC_C = 20;
            } else if (res_line.sc_loc_apac_vc.toString() === "5") {
                locAPAC_C = 21;
            }

            var locNA_C = 0;
            if (res_line.sc_loc_na_vc.toString() === "0") {
                locNA_C = 0;
            } else if (res_line.sc_loc_na_vc.toString() === "1") {
                locNA_C = 5;
            } else if (res_line.sc_loc_na_vc.toString() === "3") {
                locNA_C = 10;
            } else if (res_line.sc_loc_na_vc.toString() === "4") {
                locNA_C = 20;
            } else if (res_line.sc_loc_na_vc.toString() === "5") {
                locNA_C = 21;
            }

            var locEU_C = 0;
            if (res_line.sc_loc_eu_vc.toString() === "0") {
                locEU_C = 0;
            } else if (res_line.sc_loc_eu_vc.toString() === "1") {
                locEU_C = 5;
            } else if (res_line.sc_loc_eu_vc.toString() === "3") {
                locEU_C = 10;
            } else if (res_line.sc_loc_eu_vc.toString() === "4") {
                locEU_C = 20;
            } else if (res_line.sc_loc_eu_vc.toString() === "5") {
                locEU_C = 21;
            }

            var locLATAM_C = 0;
            if (res_line.sc_loc_latam_vc.toString() === "0") {
                locLATAM_C = 0;
            } else if (res_line.sc_loc_latam_vc.toString() === "1") {
                locLATAM_C = 5;
            } else if (res_line.sc_loc_latam_vc.toString() === "3") {
                locLATAM_C = 10;
            } else if (res_line.sc_loc_latam_vc.toString() === "4") {
                locLATAM_C = 20;
            } else if (res_line.sc_loc_latam_vc.toString() === "5") {
                locLATAM_C = 21;
            }

            //--------------



            var locAPAC_D = 0;
            if (res_line.sc_loc_apac_vd.toString() === "0") {
                locAPAC_D = 0;
            } else if (res_line.sc_loc_apac_vd.toString() === "1") {
                locAPAC_D = 5;
            } else if (res_line.sc_loc_apac_vd.toString() === "3") {
                locAPAC_D = 10;
            } else if (res_line.sc_loc_apac_vd.toString() === "4") {
                locAPAC_D = 20;
            } else if (res_line.sc_loc_apac_vd.toString() === "5") {
                locAPAC_D = 21;
            }

            var locNA_D = 0;
            if (res_line.sc_loc_na_vd.toString() === "0") {
                locNA_D = 0;
            } else if (res_line.sc_loc_na_vd.toString() === "1") {
                locNA_D = 5;
            } else if (res_line.sc_loc_na_vd.toString() === "3") {
                locNA_D = 10;
            } else if (res_line.sc_loc_na_vd.toString() === "4") {
                locNA_D = 20;
            } else if (res_line.sc_loc_na_vd.toString() === "5") {
                locNA_D = 21;
            }

            var locEU_D = 0;
            if (res_line.sc_loc_eu_vd.toString() === "0") {
                locEU_D = 0;
            } else if (res_line.sc_loc_eu_vd.toString() === "1") {
                locEU_D = 5;
            } else if (res_line.sc_loc_eu_vd.toString() === "3") {
                locEU_D = 10;
            } else if (res_line.sc_loc_eu_vd.toString() === "4") {
                locEU_D = 20;
            } else if (res_line.sc_loc_eu_vd.toString() === "5") {
                locEU_D = 21;
            }

            var locLATAM_D = 0;
            if (res_line.sc_loc_latam_vd.toString() === "0") {
                locLATAM_D = 0;
            } else if (res_line.sc_loc_latam_vd.toString() === "1") {
                locLATAM_D = 5;
            } else if (res_line.sc_loc_latam_vd.toString() === "3") {
                locLATAM_D = 10;
            } else if (res_line.sc_loc_latam_vd.toString() === "4") {
                locLATAM_D = 20;
            } else if (res_line.sc_loc_latam_vd.toString() === "5") {
                locLATAM_D = 21;
            }


            c_loc1 = locAPAC_A + locEU_A + locLATAM_A + locNA_A;
            console.log(c_loc1);
            c_loc2 = locAPAC_B + locEU_B + locLATAM_B + locNA_B;
            console.log(c_loc2);
            c_loc3 = locAPAC_C + locEU_C + locLATAM_C + locNA_C;
            console.log(c_loc3);
            c_loc4 = locAPAC_D + locEU_D + locLATAM_D + locNA_D;
            console.log(c_loc4);

            var c_loc1_m = (oWeights.loc_a1.fix * oWeights.loc_a1.cHrs) + ((c_loc1 - oWeights.loc_a1.fix) * oWeights.loc_a1.iHrs);
            var c_loc2_m = (oWeights.loc_b1.fix * oWeights.loc_b1.cHrs) + ((c_loc2 - oWeights.loc_b1.fix) * oWeights.loc_b1.iHrs);
            var c_loc3_m = (oWeights.loc_c1.fix * oWeights.loc_c1.cHrs) + ((c_loc3 - oWeights.loc_c1.fix) * oWeights.loc_c1.iHrs);
            var c_loc4_m = (oWeights.loc_d1.fix * oWeights.loc_d1.cHrs) + ((c_loc4 - oWeights.loc_d1.fix) * oWeights.loc_d1.iHrs);

            //final LOC
            var addLoc = c_loc1_m + c_loc2_m + c_loc3_m + c_loc4_m;
          

            selLoc = 0;

            if (res_line.sc_reg_na_x === "X") {
                selLoc++;
            }
            if (res_line.sc_reg_latam_x === "X") {
                selLoc++;
            }
            if (res_line.sc_reg_apac_x === "X") {
                selLoc++;
            }
            if (res_line.sc_reg_eu_x === "X") {
                selLoc++;
            }           

            //lobs
            var addFTM = 0;
            if (res_line.sc_bp_ftm > 0) {
                addFTM = oWeights.lob_ftm.cHrs;
            }

            var addPTP = 0;
            if (res_line.sc_bp_ptp > 0) {
                addPTP = oWeights.lob_ptp.cHrs;
            }

            var addMTS = 0;
            if (res_line.sc_bp_mts > 0) {
                addMTS = oWeights.lob_mts.cHrs;
            }

            var addOTC = 0;
            if (res_line.sc_bp_otc > 0) {
                addOTC = oWeights.lob_otc.cHrs;
            }

            var addDTS = 0;
            if (res_line.sc_bp_dts > 0) {
                addDTS = oWeights.lob_dts.cHrs;
            }
            //final LOB
            var addLOB = addFTM + addPTP + addMTS + addOTC + addDTS;

            //ints
            var wInts = 0;
            if (res_line.sc_unts_v.toString() === "70") {
                wInts = 75;
            } else if (res_line.sc_unts_v.toString() === "75") {
                wInts = 125;
            } else if (res_line.sc_unts_v.toString() === "80") {
                wInts = 175;
            } else if (res_line.sc_unts_v.toString() === "85") {
                wInts = 225;
            } else if (res_line.sc_unts_v.toString() === "100") {
                wInts = 300;
            }
            var addInts = oWeights.scope_ints.cHrs + ((wInts - oWeights.scope_ints.fix) * oWeights.scope_ints.iHrs);

            //unts
            var wUnts = 0;
            if (res_line.sc_unts_v.toString() === "200") {
                wUnts = 150;
            } else if (res_line.sc_unts_v.toString() === "201") {
                wUnts = 200;
            } else if (res_line.sc_unts_v.toString() === "202") {
                wUnts = 300;
            } else if (res_line.sc_unts_v.toString() === "205") {
                wUnts = 400;
            } else if (res_line.sc_unts_v.toString() === "210") {
                wUnts = 600;
            }
            var addUnts = oWeights.scope_unts.cHrs + ((wUnts - oWeights.scope_unts.fix) * oWeights.scope_unts.iHrs);

            //users    
            var wUser = 0;
            if (res_line.sc_unts_v.toString() === "1") {
                wUser = 100;
            } else if (res_line.sc_unts_v.toString() === "2") {
                wUser = 250;
            } else if (res_line.sc_unts_v.toString() === "3") {
                wUser = 500;
            } else if (res_line.sc_unts_v.toString() === "4") {
                wUser = 700;
            }
            var addUser = oWeights.scope_user.cHrs + ((wUser - oWeights.scope_user.fix) * oWeights.scope_user.iHrs);

            //lang
            var addLang = oWeights.lang.cHrs + ((res_line.sc_lang_v - oWeights.lang.fix) * oWeights.lang.iHrs);

            //infra
            //instance
            var addInstance = oWeights.inst.cHrs + ((res_line.if_psap_v - oWeights.inst.fix) * oWeights.inst.iHrs);

            //connected systems
            var wConsys = 0;
            if (res_line.sc_unts_v.toString() === "1") {
                wConsys = 10;
            } else if (res_line.sc_unts_v.toString() === "2") {
                wConsys = 25;
            } else if (res_line.sc_unts_v.toString() === "4") {
                wConsys = 50;
            } else if (res_line.sc_unts_v.toString() === "5") {
                wConsys = 60;
            }
            var addPack = oWeights.consys.cHrs + ((wConsys - oWeights.consys.fix) * oWeights.consys.iHrs);

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
            var wRicef = 0;
            if (res_line.sc_unts_v.toString() === "50") {
                wRicef = 50;
            } else if (res_line.sc_unts_v.toString() === "125") {
                wRicef = 125;
            } else if (res_line.sc_unts_v.toString() === "200") {
                wRicef = 200;
            } else if (res_line.sc_unts_v.toString() === "300") {
                wRicef = 300;
            } else if (res_line.sc_unts_v.toString() === "500") {
                wRicef = 500;
            } else if (res_line.sc_unts_v.toString() === "600") {
                wRicef = 600;
            }
            var addRICEFW = oWeights.ricefw.cHrs + ((wRicef - oWeights.ricefw.fix) * oWeights.ricefw.iHrs);

            //add all
            var finalAdd = addLoc + addLOB + addInts + addUnts + addUser + addLang + addInstance + addPack + addSize +
                addEDI + addMiddle + addRICEFW;

            //Add Effort for 1 location 1 region

            oEstimate.WorkHours = finalAdd;

            if (oEstimate.WorkHours <= 20000) {
                oEstimate.Scale = "Small";

                oEstimate.PersonMonths = 8;
                oEstimate.LowPersonMonths = 7;
                oEstimate.HighPersonMonths = 9;
            } else if (oEstimate.WorkHours > 20000 && oEstimate.WorkHours <= 30000) {
                oEstimate.Scale = "Medium";

                oEstimate.PersonMonths = 9;
                oEstimate.LowPersonMonths = 8;
                oEstimate.HighPersonMonths = 10;
            } else if (oEstimate.WorkHours > 30000 && oEstimate.WorkHours <= 40000) {
                oEstimate.Scale = "Medium";

                oEstimate.PersonMonths = 10;
                oEstimate.LowPersonMonths = 9;
                oEstimate.HighPersonMonths = 11;
            }else if (oEstimate.WorkHours > 40000 && oEstimate.WorkHours <= 60000) {
                oEstimate.Scale = "Large";

                oEstimate.PersonMonths = 11;
                oEstimate.LowPersonMonths = 10;
                oEstimate.HighPersonMonths = 12;
            }else if (oEstimate.WorkHours > 60000 && oEstimate.WorkHours <= 70000) {
                oEstimate.Scale = "Large";

                oEstimate.PersonMonths = 12;
                oEstimate.LowPersonMonths = 11;
                oEstimate.HighPersonMonths = 13;
            }else if (oEstimate.WorkHours > 70000 && oEstimate.WorkHours <= 80000) {
                oEstimate.Scale = "X-Large";

                oEstimate.PersonMonths = 13;
                oEstimate.LowPersonMonths = 12;
                oEstimate.HighPersonMonths = 14;
            }else if (oEstimate.WorkHours > 80000 && oEstimate.WorkHours <= 90000) {
                oEstimate.Scale = "NA";

                oEstimate.PersonMonths = 14;
                oEstimate.LowPersonMonths = 13;
                oEstimate.HighPersonMonths = 15;
            } else if (oEstimate.WorkHours > 90000) {
                oEstimate.Scale = "NA";

                oEstimate.PersonMonths = 15;
                oEstimate.LowPersonMonths = 14;
                oEstimate.HighPersonMonths = 16;
            }

            oEstimate.result = result;
            res.send(oEstimate);
        }
    });
});

module.exports = router;
