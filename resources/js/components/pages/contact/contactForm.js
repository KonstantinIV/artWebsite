import React from 'react';
import {  useState } from "react";




function ContactForm() {
  const [formData, setFormData] = useState({

    emailType : 'contactForm',
    emailData : {
                  sendersName: '',
                  sendersEmail: '',
                  sendersMessage: ''}
  });

  const [mailResult, setMailResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  const handleChange = (e) => {
    setFormData({ ...formData, emailData: { ...formData.emailData, [e.target.name]: e.target.value } });

   // setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = () => {
    return fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
  }

  const setEmailStatus = (data) => {
      
    if(data){
      setMailResult("Mail sent!");
    }else{
      setMailResult("Something went wrong.");
    }
  }

  

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    sendEmail()
      .then((response) => response.json())
      .then((data) => {setEmailStatus(data)})
      .finally(() => {
        setIsLoading(false);
      });
  };



  


  return (


    <form className="contactFormContainer" onSubmit={handleSubmit}>
      <h2 className='contactInfoHeader'>
        Contact Form
      </h2>
      <div>
        <label htmlFor="name" className="contactLabel">Your name:</label>
        <input
          type="text"
          id="name"
          name="sendersName"
          value={formData.sendersName}
          onChange={handleChange}
          required
          className="contactInput"
        />
      </div>
      <div>
        <label htmlFor="email" className="contactLabel">Your email:</label>
        <input
          type="email"
          id="email"
          name="sendersEmail"
          value={formData.sendersEmail}
          onChange={handleChange}
          required
          className="contactInput"
        />
      </div>
      <div>
        <label htmlFor="message" className="contactLabel">Message:</label>
        <textarea
          id="message"
          name="sendersMessage"
          value={formData.sendersMessage}
          onChange={handleChange}
          required
          className="contactTextarea"
        />
      </div>
      <div className="formMailSubmitContainer">
      <button type="submit" className="contactButton">Submit</button>
      {isLoading ? (
           <div className="loadingIndicator">
           <div className="spinner"></div>
         </div>
          ) : (
            <div className="formMailResult">{mailResult}</div>
            )}
      </div>

    </form>
  );
}

export default ContactForm;
