DROP TABLE IF EXISTS services
CASCADE;
DROP TABLE IF EXISTS serviceImages
CASCADE;

-- ************************************************************
-- services table
-- ************************************************************
CREATE TABLE services
(
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL,
  text_body VARCHAR(2000) NOT NULL,
  call_to_action VARCHAR(50) NOT NULL
);
-- ************************************************************
-- serviceImages table
-- ************************************************************
CREATE TABLE serviceImages
(
  id SERIAL PRIMARY KEY NOT NULL,
  service_id INTEGER REFERENCES services(id) ON DELETE CASCADE,
  image_url VARCHAR(255)
);
