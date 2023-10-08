import React from 'react';
import { useState } from 'react';
import {ReCAPTCHA} from 'react-google-recaptcha';




export default function ContactForm(
  {
    siteKey
  }
) {

  const [formData, setFormData] = useState({
    emailType: 'contactForm',
    emailData: {
      sendersName: '',
      sendersEmail: '',
      sendersMessage: '',
      sendersCaptcha: ''
    }
  });

  const [mailResult, setMailResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [captchaIsSet, setCaptcha] = useState(false);


  //When user fills the fields the state is updated accordingly
  const handleChange = (e) => {
    setFormData({ ...formData, emailData: { ...formData.emailData, [e.target.name]: e.target.value } });
  };

  //When user completes the captcha set the captcha value to send to server for verification
  const handleCaptchaChange = (value) => {
    setFormData({ ...formData, emailData: { ...formData.emailData, sendersCaptcha: value } });
    //Captcha was completed
    setCaptcha(true);
  };



  //When user presses the submit button, check if all conditions are met before sending
  const handleSubmit = (e) => {
    e.preventDefault();

    //Chekc if the user completed the captcha if not givve message
    if (captchaIsSet == false) {
      setMailResult('Please complete the reCAPTCHA challenge.');
      return;
    }
    //Starts the loading spinner to show progress on mail progress
    setIsLoading(true);

    //send mail
    sendEmail()
      .then((response) => {
        //check for outer errors setEmailStatus(data)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        //check for inner errors
        if(!data.status){
            throw new Error(`Error! Status: ${data.message}`);
        }
        setEmailStatus(true);
  
      })
      .catch((error) => {
        setEmailStatus(false);
        console.log(error);
      })
      .finally(() => {
        //Mail progress ended
        setIsLoading(false);
        setCaptcha(false);
        //reset the capthca 
        grecaptcha.reset();
      });
  };

  const sendEmail = () => {
    return fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
  }

  const setEmailStatus = (status) => {
    if (status) {
      setMailResult('Mail sent!');
    } else {
      setMailResult('Something went wrong.');
    }
  }



  return (


    <form className='contactFormContainer' onSubmit={handleSubmit}>
      <h2 className='contactInfoHeader'>
        Contact Form
      </h2>
      <div>
        <label htmlFor='name' className='contactLabel'>Your name:</label>
        <input
          type='text'
          id='name'
          name='sendersName'
          value={formData.sendersName}
          onChange={handleChange}
          required
          className='contactInput'
        />
      </div>
      <div>
        <label htmlFor='email' className='contactLabel'>Your email:</label>
        <input
          type='email'
          id='email'
          name='sendersEmail'
          value={formData.sendersEmail}
          onChange={handleChange}
          required
          className='contactInput'
        />
      </div>
      <div>
        <label htmlFor='message' className='contactLabel'>Message:</label>
        <textarea
          id='message'
          name='sendersMessage'
          value={formData.sendersMessage}
          onChange={handleChange}
          required
          className='contactTextarea'
        />
      </div>
      <div className='formMailSubmitContainer'>
        <button type='submit' className='contactButton'>Submit</button>
        {isLoading ? (
          <div className='loadingIndicator'>
            <div className='spinner'></div>
          </div>
        ) : (
          <div className='formMailResult'>{mailResult}</div>
        )}
      </div>
      <ReCAPTCHA
        sitekey={siteKey}
        onChange={handleCaptchaChange}
        name='sendersCaptcha'
      />

    </form>
  );
}

