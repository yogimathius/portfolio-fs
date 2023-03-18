import React, { useState } from 'react';
import emailjs from 'emailjs-com'

const SubscriptionService = () => {
  emailjs.init('user_rivxf7OIBzCWd9dlHiDrz')
  const [btnValue, setBtnValue] = useState('Submit')

  
  const sendEmail = (e) => {
    e.preventDefault();
    setBtnValue('Sending...')
    emailjs.sendForm('service_xcnmobs', 'template_w4hpumc', e.target)
    .then((result) => {
      setBtnValue('Submit')
    }, (error) => {
      setBtnValue('Submit')
      console.error(error.text);
    });
    e.target.reset()
  }

  return (
    <div className="space-y-2 md:space-y-4 flex flex-col justify-center items-center">
      <form className="flex flex-col md:flex-row justify-center contact-form space-y-2 md:space-x-4" onSubmit={sendEmail}>
        <label htmlFor="email"></label>
        <input onChange={({target}) => console.log(target.value)} type="email" name="email" className="border-2 border-black rounded text-center" size="16" placeholder="Enter email.."></input>
        <button className="btn btn-primary text-base">{btnValue}</button>
      </form>
      <h2 className="text-maximum-blue-green font-semibold text-base text-center w-5/6">Sign up to get my birth affirmation recording for free!</h2>
    </div>
  );
};

export default SubscriptionService;