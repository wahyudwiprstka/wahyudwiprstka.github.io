import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    sendEmail(formData);
  };

  const sendEmail = data => {
    // Use a library like axios to send an HTTP request to your server-side script
    // that will send the email with the form data
    axios.post('/send-email', data)
      .then(response => {
        // Show a success message to the user
        console.log(response);
      })
      .catch(error => {
        // Show an error message to the user
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" onChange={handleChange} />
      </label>
      <br />
      <label>
        Message:
        <textarea name="message" onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Send</button>
    </form>
  );
}

export default ContactUs;