create table `appdb`.`cust_estimates` (
  `entry_id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY UNIQUE,
  `comp_name` VARCHAR(20),
  `comp_sector` TEXT,
  `comp_region` VARCHAR(5),
  `client_name` TEXT,
  `client_contact` TEXT,
  `cap_name` VARCHAR(20),
  `cap_email` TEXT,
  `cap_phone` VARCHAR(15),  

  `bg_prog_desc` TEXT,
  `bg_bizd_desc` TEXT,
  `bg_itdr_desc` TEXT,
  `bg_bizp_desc` TEXT,
  `bg_bcad_desc` TEXT,

  `sc_reg_na_x` char(01),
  `sc_reg_apac_x` char(01),
  `sc_reg_eu_x` char(01),
  `sc_reg_latam_x` char(01),

  `sc_loc_na_va` INT UNSIGNED,
  `sc_loc_na_vb` INT UNSIGNED,
  `sc_loc_na_vc` INT UNSIGNED,
  `sc_loc_na_vd` INT UNSIGNED,

  `sc_loc_apac_va` INT UNSIGNED,
  `sc_loc_apac_vb` INT UNSIGNED,
  `sc_loc_apac_vc` INT UNSIGNED,
  `sc_loc_apac_vd` INT UNSIGNED,

  `sc_loc_eu_va` INT UNSIGNED,
  `sc_loc_eu_vb` INT UNSIGNED,
  `sc_loc_eu_vc` INT UNSIGNED,
  `sc_loc_eu_vd` INT UNSIGNED,

  `sc_loc_latam_va` INT UNSIGNED,
  `sc_loc_latam_vb` INT UNSIGNED,
  `sc_loc_latam_vc` INT UNSIGNED,
  `sc_loc_latam_vd` INT UNSIGNED,

  `sc_bp_ftm` TINYINT UNSIGNED default 0, 
  `sc_bp_otc` TINYINT UNSIGNED default 0, 
  `sc_bp_ptp` TINYINT UNSIGNED default 0, 
  `sc_bp_dts` TINYINT UNSIGNED default 0, 
  `sc_bp_mts` TINYINT UNSIGNED default 0,   
  `sc_bp_other` TEXT,

  `sc_ints_v` INT UNSIGNED,
  `sc_unts_v` INT UNSIGNED,
  `sc_user_v` INT UNSIGNED,
  `sc_lang_v` INT UNSIGNED,
  `sc_lang_desc` TEXT,

  `sc_lob_bus_v` INT UNSIGNED,
  `sc_lob_seg_v` INT UNSIGNED, 

  `if_psap_v` INT UNSIGNED, 
  `if_plvl_v` INT UNSIGNED, 
  `if_syscon_v` INT UNSIGNED, 
  `if_sysize_v` INT UNSIGNED, 

  `if_nonsap_desc` TEXT, 

  `if_key_arib_v` TINYINT UNSIGNED default 0, 
  `if_key_conc_v` TINYINT UNSIGNED default 0, 
  `if_key_fiel_v` TINYINT UNSIGNED default 0, 
  `if_key_sf_v` TINYINT UNSIGNED default 0, 
  `if_key_solm_v` TINYINT UNSIGNED default 0, 
  `if_key_ewm_v` TINYINT UNSIGNED default 0, 
  `if_key_gts_v` TINYINT UNSIGNED default 0, 
  `if_key_attp_v` TINYINT UNSIGNED default 0, 
  `if_key_tms_v` TINYINT UNSIGNED default 0, 
  `if_key_apo_v` TINYINT UNSIGNED default 0, 
  `if_key_vistx_v` TINYINT UNSIGNED default 0, 
  `if_key_mdg_v` TINYINT UNSIGNED default 0, 
  `if_key_optx_v` TINYINT UNSIGNED default 0, 
  `if_key_others_v` TINYINT UNSIGNED default 0,

  `if_dev_edi_v` INT UNSIGNED, 
  `if_dev_mdlw_v` INT UNSIGNED, 
  `if_dev_mdlw_desc` TEXT, 
  `if_dev_ricefw_v` INT UNSIGNED, 
  `if_dev_comm` TEXT
);