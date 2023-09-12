import React from 'react';
import {  useState } from "react";
import ReCAPTCHA from "react-google-recaptcha"



function ContactForm(
  {
    siteKey
  }
) {
  
  const [formData, setFormData] = useState({

    emailType : 'contactForm',
    emailData : {
                  sendersName: '',
                  sendersEmail: '',
                  sendersMessage: '',
                  sendersCaptcha:''}
  });

  const [mailResult, setMailResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [captchaIsSet, setCaptcha] = useState(false);


  //When user fills the fields the state is updated accordingly
  const handleChange = (e) => {
    setFormData({ ...formData, emailData: { ...formData.emailData, [e.target.name]: e.target.value } });
  };

  //When user completes the captcha
  const handleCaptchaChange = (value) => {
      setFormData({ ...formData, emailData: { ...formData.emailData, sendersCaptcha: value } });    
      setCaptcha(true);
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
    if (captchaIsSet == false) {
      setMailResult("Please complete the reCAPTCHA challenge.");
      return;
    }

    setIsLoading(true);

  
    sendEmail()
      .then((response) => response.json())
      .then((data) => {setEmailStatus(data)})
      .finally(() => {
        setIsLoading(false);
        setCaptcha(false);
        grecaptcha.reset();
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
        <ReCAPTCHA
          sitekey={siteKey} 
          onChange={handleCaptchaChange}
          name="sendersCaptcha"
          />

    </form>
  );
}

export default ContactForm;
