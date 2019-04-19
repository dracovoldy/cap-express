create table `appdb`.`cust_estimates` (
  `entry_id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY UNIQUE,
  `comp_id` INT UNSIGNED NOT NULL,
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

  `sc_bp_ftm` TINYINT UNSIGNED, 
  `sc_bp_otc` TINYINT UNSIGNED, 
  `sc_bp_ptp` TINYINT UNSIGNED, 
  `sc_bp_dts` TINYINT UNSIGNED, 
  `sc_bp_mts` TINYINT UNSIGNED, 
  `sc_bp_itd` TINYINT UNSIGNED, 
  `sc_bp_stc` TINYINT UNSIGNED, 
  `sc_bp_htr` TINYINT UNSIGNED, 
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

  `if_key_arib_v` TINYINT UNSIGNED, 
  `if_key_conc_v` TINYINT UNSIGNED, 
  `if_key_fiel_v` TINYINT UNSIGNED, 
  `if_key_sf_v` TINYINT UNSIGNED, 
  `if_key_solm_v` TINYINT UNSIGNED, 
  `if_key_ewm_v` TINYINT UNSIGNED, 
  `if_key_gts_v` TINYINT UNSIGNED, 
  `if_key_attp_v` TINYINT UNSIGNED, 
  `if_key_tms_v` TINYINT UNSIGNED, 
  `if_key_apo_v` TINYINT UNSIGNED, 
  `if_key_vistx_v` TINYINT UNSIGNED, 
  `if_key_mdg_v` TINYINT UNSIGNED, 
  `if_key_optx_v` TINYINT UNSIGNED, 
  `if_key_others_v` TEXT, 

  `if_dev_edi_v` INT UNSIGNED, 
  `if_dev_mdlw_v` INT UNSIGNED, 
  `if_dev_ricefw_v` INT UNSIGNED, 
  `if_dev_comm` TEXT
);