-- list all students for a cohort
select * from students where cohort_id = 1;
-- list all students for a track
select * from students where track_id = 1;
-- all cohorts for a track
-- a student belongs to a cohort <> a cohort can have several students
--    tbl.integer('cohort_id').unsigned().references('id').inTable('cohorts');
--    tbl.integer('student_id').unsigned().references('id').inTable('students');
-- a student belongs to one track <> a track can have many students
-- a track can have many cohorts <> a cohort belongs to only one track
-- add support for a student attending multiple cohorts
-- all the cohorts for a student
select s.name, c.name
from cohorts c
join cohortStudents cs on c.id = cs.cohort_id
join students s on s.id = cs.student_id
order by s.name
--where s.id = 1
/*
Relationship Types
- one to one
- one to many: most common.
- many to many: smoke and mirrors  (product <> orders)
*/