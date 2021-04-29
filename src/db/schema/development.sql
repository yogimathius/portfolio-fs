insert into projects (title, text_body, project_url) values
('Freeflow Social Network', 'React.js with Redux project using express.js backend (still in development)', 'https://freeflow-network.netlify.app/'),
('Sovereign Birth Business Website', 'Business website with admin login. Uses React Front End with Express Back End, Postgresql persistent data, and Tailwind CSS.', 'https://sovereign-birth.netlify.app/'),
('Interview Scheduler App', 'React.js project using express.js backend, with useReducer hook and websocket', 'https://interview-scheduler-mj.netlify.app/'),
('Yogi Mathius Personal Blog', 'Unfinished personal blog for yoga', 'https://yogimathius.netlify.app/'),
('Johnson Landscaping Website', 'Previous professions business website.', 'https://johnsonlandscaping.netlify.app/index.html');

insert into projectImages (project_id, image_url) values
(1, 'https://raw.githubusercontent.com/mathiusjohnson/portfolio2.0/master/src/assets/images/portfolio/freeflow.png'),
(2, 'https://raw.githubusercontent.com/mathiusjohnson/portfolio2.0/master/src/assets/images/portfolio/sovereign-birth.png'),
(3, 'https://raw.githubusercontent.com/mathiusjohnson/portfolio2.0/master/src/assets/images/portfolio/scheduler.jpeg'),
(4, 'https://raw.githubusercontent.com/mathiusjohnson/portfolio2.0/master/src/assets/images/portfolio/yogimathius.jpeg'),
(5, 'https://raw.githubusercontent.com/mathiusjohnson/portfolio2.0/master/src/assets/images/portfolio/johnsonlandscaping.jpeg');

-- insert into singleServiceDetails (service_id, service_details, is_list, service_list_id, is_button, button_link, button_target, button_text) values
-- (4, 'What is freebirth? Freebirth is birthing without the presence of a licensed medical provider.  This type of birth offers the birther full autonomy to have an undisturbed-physiological birth and hold the early postpartum in a container of pure sacredness.', false, null, false, null, null, null),
-- (4, 'My freebirth support is designed for YOU.  We will visit in person or virtually once a month throughout your pregnancy with the option to connect with me via e-mail & phone at any time.  I am here for YOU as a mentor & friend who believes in your freebirth vision.', false, null, null, false, null, null, null),
-- (4, 'We will explore the following with opportunity to visit whatever else resonates with you at each stage.', false, null, null, false, null, null, null),
-- (4, 'your vision for your pregnancy', true, 1, null, false, null, null, null),
-- (4, 'building a support team', true, 1, null, false, null, null, null),
-- (4, 'what physiological pregnancy is', true, 1, null, false, null, null, null),
-- (4, 'pregnancy fears & concerns', true, 1, null, false, null, null, null),
-- (4, 'your vision for your birth ', true, 1, null, false, null, null, null),
-- (4, 'what physiological-undisturbed birth is', true, 1, null, false, null, null, null),
-- (4, 'the most common birth complications and how to safely address them', true, 1, null, false, null, null, null),
-- (4, 'what to expect during the immediate postpartum ', true, 1, null, false, null, null, null),
-- (4, 'your postpartum vision', true, 1, null, false, null, null, null),
-- (4, 'preparation for postpartum', true, 1, null, false, null, null, null),
-- (4, '', true, 1, null, false, null, null, null),
-- (4, '', true, 1, null, false, null, null, null),
-- (4, 'Prenatal visits are typically 90 min - 2 hours', false, null, null, false, null, null, null),
-- (4, 'If your freebirth vision includes having me in attendance, Id be honoured to witness and hold space for your journey.', false, null, null, false, null, null, null),
-- (4, 'Postpartum visits are typically at day 1, 4, 9 and then once a week thereafter until day 40. The type of postpartum support I offer depends on your desires.  Common forms of support include; holding space to listen to your birth story as well as to receive questions, concerns, and how you are navigating your sense of Self now that you have crossed the birth threshold.  I am happy to prepare light meals, gather groceries and other items that you are in need of, and care for baby so that you can have time to nourish yourself with a bath and / or nap. Postpartum care is about helping support your healing from a holistic perspective and show up in true authenticity as a fellow mother, friend, and birth worker. ', false, null, null, false, null, null, null),
-- (4, 'Postpartum visits are typically 90 min - 2 hours. ', false, null, null, false, null, null, null),
-- (4, 'Postpartum visits are typically 90 min - 2 hours. ', false, null, null, false, null, null, null),
