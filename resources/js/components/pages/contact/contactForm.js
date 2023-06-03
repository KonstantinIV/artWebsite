import React, { useState } from 'react';




function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform additional validation or submit the form data here
    console.log(formData);
    // Reset the form fields
    setFormData({ name: '', email: '', message: '' });
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
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="contactInput"
        />
      </div>
      <div>
        <label htmlFor="email" className="contactLabel">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="contactInput"
        />
      </div>
      <div>
        <label htmlFor="message" className="contactLabel">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
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
