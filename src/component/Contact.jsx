import { useEffect } from "react";
import { useState } from "react";

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        sendEmail(formData);
      };
    
      const sendEmail = data => {
        // Use the HTML5 `mailto:` feature to open the user's default email client
        // with the form data already filled in
        const emailLink = `mailto:wahyudwiprstka@gmail.com?subject=Portfolio%20Contact%20Message&body=Name:%20${data.name}%0AEmail:%20${data.email}%0AMessage:%20${data.message}`;
        window.location.href = emailLink;
      };
    
      return (
        <section id="contact">
            <div className="text-center mb-7 pb-3">
                <h1 className="text-3xl text-primary font-bold">Contact Me</h1>
                <form onSubmit={handleSubmit}>
                    <label className="text-xl">Name</label><br/>
                    <input type="text" name="name" onChange={handleChange} className="border border-gray-400 border-solid rounded w-2/3 mb-2 h-8 md:w-1/2"/>
                    <br/>
                    <label className="text-xl">Email</label><br/>
                    <input type="email" name="email" onChange={handleChange} className="border border-gray-400 border-solid rounded w-2/3 mb-2 h-8 md:w-1/2"/>
                    <br />
                    <label className="text-xl">Message</label><br/>
                    <textarea name="message" onChange={handleChange} className="border border-gray-400 border-solid rounded w-2/3 mb-2 h-20 md:w-1/2"/>
                    <br />
                    <button type="submit" className="text-xl bg-indigo-600 text-white rounded shadow hover:bg-indigo-800 transition w-2/3 md:w-1/2 md:p-2">Send</button>
                </form>
            </div>
        </section>

      );

}

export default Contact;