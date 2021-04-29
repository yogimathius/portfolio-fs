DROP TABLE IF EXISTS projects
CASCADE;
DROP TABLE IF EXISTS projectImages
CASCADE;

-- ************************************************************
-- projects table
-- ************************************************************
CREATE TABLE projects
(
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL,
  text_body VARCHAR(2000) NOT NULL,
  project_url VARCHAR (255) NOT NULL
);
-- ************************************************************
-- serviceImages table
-- ************************************************************
CREATE TABLE projectImages
(
  id SERIAL PRIMARY KEY NOT NULL,
  project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE,
  image_url VARCHAR(255)
);

-- CREATE TABLE singleProjectDetails
-- (
--   id SERIAL PRIMARY KEY NOT NULL,
--   project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE,
--   projectDetails VARCHAR(255),
--   is_list boolean,
--   project_list_id INTEGER REFERENCES projectList(id) ON DELETE CASCADE,
--   is_button boolean,
--   button_link VARCHAR(255),
--   button_target VARCHAR(50),
--   button_text VARCHAR(255)
-- );

-- CREATE TABLE projectList(
--   id SERIAL PRIMARY KEY NOT NULL,
--   service_id INTEGER REFERENCES services(id) ON DELETE CASCADE,
-- );
