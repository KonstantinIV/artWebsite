import React from 'react';
import { useEffect, useState } from "react";




function ContactForm() {
  const [formData, setFormData] = useState({
    subject : 'WebsiteMail',

    sendersName: '',
    sendersEmail: '',
    sendersMessage: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  

    fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      });



  };


  useEffect(() => {
    // Fetch image file names when the component mounts
    //handleSubmit("");

  }, []);


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
      <button type="submit" className="contactButton">Submit</button>
    </form>
  );
}

export default ContactForm;
