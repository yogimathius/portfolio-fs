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
  call_to_action VARCHAR(50) NOT NULL,
  call_to_action_link VARCHAR(255) NOT NULL,
  call_to_action_target VARCHAR(50) NOT NULL
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

CREATE TABLE singleServiceDetails
(
  id SERIAL PRIMARY KEY NOT NULL,
  service_id INTEGER REFERENCES services(id) ON DELETE CASCADE,
  serviceDetails VARCHAR(255),
  is_list boolean,
  service_list_id INTEGER REFERENCES serviceList(id) ON DELETE CASCADE,
  is_button boolean,
  button_link VARCHAR(255),
  button_target VARCHAR(50),
  button_text VARCHAR(255)
);

CREATE TABLE serviceList(
  id SERIAL PRIMARY KEY NOT NULL,
  service_id INTEGER REFERENCES services(id) ON DELETE CASCADE,
);
