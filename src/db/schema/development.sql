insert into projects (title, text_body, project_url, page_id) values
('Freeflow Social Network', 'This project required me to build a fully responsive Social Media platform with a complex state management system. I used HTML5 and TailwindCSS with a combination of Grid and Flexbox, and React with Redux state management to securely handle the constant state updates.', 'https://freeflow-network.netlify.app/', 'freeflow'),
('Sovereign Birth Business Website', 'This business website required me to implement a secure admin login using Firebase for content management privileges with both front end and back end authentication and authorization. I used a React Front End with both react hooks and custom hooks (useVisualMode) nd an Express Back End, Postgresql persistent data, and Tailwind CSS.', 'https://sovereign-birth.netlify.app/', 'sovereign-birth'),
('Interview Scheduler App', 'This project was my first full introduction to building a full-stack application using React and Express. I used Storybook, Jest and Cypress testing to provide over 80% test coverage in a functional component app. The application is also hooked up to a websocket for real-time updates, and was my first experience to using a reducer.', 'https://interview-scheduler-mj.netlify.app/', 'scheduler'),
('Yogi Mathius Personal Blog', 'This project required me to build a fully responsive business website, experimenting with more advanced CSS (parallax, hover glow effects, transitions) to deepen my front-end knowledge. ', 'https://yogimathius.netlify.app/', 'yogi-mathius'),
('Johnson Landscaping Website', 'This project was my first website, which had the privilege of being my personal business website from my previous profession. I used HTML5, along with CSS flexbox to build a fully responsive website, along with a PHP script for contacting my business.', 'https://johnsonlandscaping.netlify.app/index.html', 'johnson-landscaping');

insert into projectImages (project_id, image_url) values
(1, 'https://raw.githubusercontent.com/mathiusjohnson/portfolio2.0/master/src/assets/images/portfolio/freeflow.png'),
(2, 'https://raw.githubusercontent.com/mathiusjohnson/portfolio2.0/master/src/assets/images/portfolio/sovereign-birth.png'),
(3, 'https://raw.githubusercontent.com/mathiusjohnson/portfolio2.0/master/src/assets/images/portfolio/scheduler.jpeg'),
(4, 'https://raw.githubusercontent.com/mathiusjohnson/portfolio2.0/master/src/assets/images/portfolio/yogimathius.jpeg'),
(5, 'https://raw.githubusercontent.com/mathiusjohnson/portfolio2.0/master/src/assets/images/portfolio/johnsonlandscaping.jpeg');

insert into previewImages (project_id, image_url) values
(1, 'https://raw.githubusercontent.com/mathiusjohnson/portfolio2.0/master/src/assets/images/portfolio/freeflow/screencapture-freeflow-network-netlify-app-2021-04-29-13_22_35.png'),
(2, 'https://raw.githubusercontent.com/mathiusjohnson/portfolio2.0/master/src/assets/images/portfolio/sovereignbirth/screencapture-sovereign-birth-netlify-app-contact-2021-04-29-13_21_24.png'),
(2, 'https://raw.githubusercontent.com/mathiusjohnson/portfolio2.0/master/src/assets/images/portfolio/sovereignbirth/screencapture-sovereign-birth-netlify-app-home-2021-04-29-13_20_42.png'),
(2, 'https://raw.githubusercontent.com/mathiusjohnson/portfolio2.0/master/src/assets/images/portfolio/sovereignbirth/screencapture-sovereign-birth-netlify-app-offerings-2021-04-29-13_21_05.png'),
(4, 'https://raw.githubusercontent.com/mathiusjohnson/portfolio2.0/master/src/assets/images/portfolio/yogimathius/ympreviewone.png'),
(5, 'https://raw.githubusercontent.com/mathiusjohnson/portfolio2.0/master/src/assets/images/portfolio/johnsonlandscaping/screencapture-johnsonlandscaping-netlify-app-index-html-2021-04-29-13_27_48.png'),
(5, 'https://raw.githubusercontent.com/mathiusjohnson/portfolio2.0/master/src/assets/images/portfolio/johnsonlandscaping/jlpreviewone.png'),
(5, 'https://raw.githubusercontent.com/mathiusjohnson/portfolio2.0/master/src/assets/images/portfolio/johnsonlandscaping/screencapture-johnsonlandscaping-netlify-app-about-html-2021-04-29-13_28_05.png');