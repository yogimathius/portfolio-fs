import React from 'react';
import Contact from '../components/Contact/index.jsx'

const ContactPage = ({state}) => {
  return (
    <div>
      <Contact state={state} />
    </div>
  );
};

export default ContactPage;