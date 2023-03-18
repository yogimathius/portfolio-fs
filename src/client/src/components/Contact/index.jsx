import React, { useState } from 'react';
import EmailInput from './EmailInput';
import MessageInput from './MessageInput';
import NameInput from './NameInput';
import SubjectInput from './SubjectInput';
// import axios from 'axios';
import emailjs, { init } from 'emailjs-com';
import GetInTouch from './GetInTouch';

init("user_8MpnZ33kDRAuQaBFXueiA");

const Contact = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const onFirstNameChange = (event) => {
    setFirstName(event.target.value)
  }

  const onLastNameChange = (event) => {
    setLastName(event.target.value)
  }

  const onEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const onSubjectChange = (event) => {
      setSubject(event.target.value)
  }

  const onMsgChange = (event) => {
    setMessage(event.target.value)
  }

  function sendEmail(e) {
    e.preventDefault();

    const messageDetails = {
      name: firstName + " " + lastName,
      email,
      subject,
      message
    }

    emailjs.send('service_d5hlzw7', 'template_hlrzfln', messageDetails)
      .then((result) => {
          alert("Message Sent."); 
          resetForm()
      }, (error) => {
          console.error(error.text);
      });
  }

  const resetForm = () =>{
      setSubject('')
      setEmail('')
      setFirstName('')
      setLastName('')
      setMessage('')
  }

  return (
    <div>
      <GetInTouch />
      <div className="flex justify-center my-12">
        <form className="w-full" onSubmit={(e) => sendEmail(e)}>  
          <NameInput firstName={firstName} lastName={lastName} onFirstNameChange={onFirstNameChange} onLastNameChange={onLastNameChange}/>
          <EmailInput email={email} onEmailChange={onEmailChange}/>
          <SubjectInput subject={subject} onSubjectChange={onSubjectChange} />
          <MessageInput message={message} onMsgChange={onMsgChange} />
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <button className="btn btn-primary shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none  font-bold py-2 px-4 rounded" type="button" onClick={(e) => sendEmail(e)}>
                Send
              </button>
            </div>
            <div className="md:w-2/3"></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;