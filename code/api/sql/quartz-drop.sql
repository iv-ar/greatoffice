DROP TABLE IF EXISTS qrtz_fired_triggers;
DROP TABLE IF EXISTS qrtz_paused_trigger_grps;
DROP TABLE IF EXISTS qrtz_scheduler_state;
DROP TABLE IF EXISTS qrtz_locks;
DROP TABLE IF EXISTS qrtz_simprop_triggers;
DROP TABLE IF EXISTS qrtz_simple_triggers;
DROP TABLE IF EXISTS qrtz_cron_triggers;
DROP TABLE IF EXISTS qrtz_blob_triggers;
DROP TABLE IF EXISTS qrtz_triggers;
DROP TABLE IF EXISTS qrtz_job_details;
DROP TABLE IF EXISTS qrtz_calendars;

DROP INDEX IF EXISTS idx_qrtz_j_req_recovery;
DROP INDEX IF EXISTS idx_qrtz_t_next_fire_time;
DROP INDEX IF EXISTS idx_qrtz_t_state;
DROP INDEX IF EXISTS idx_qrtz_t_nft_st;
DROP INDEX IF EXISTS idx_qrtz_ft_trig_name;
DROP INDEX IF EXISTS idx_qrtz_ft_trig_group;
DROP INDEX IF EXISTS idx_qrtz_ft_trig_nm_gp;
DROP INDEX IF EXISTS idx_qrtz_ft_trig_inst_name;
DROP INDEX IF EXISTS idx_qrtz_ft_job_name;
DROP INDEX IF EXISTS idx_qrtz_ft_job_group;
DROP INDEX IF EXISTS idx_qrtz_ft_job_req_recovery;
