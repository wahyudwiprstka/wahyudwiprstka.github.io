import { useEffect } from "react";
import { useState } from "react";

const Contact = () => {
    
      return (
        <section id="contact">
            <div className="text-center mb-7 pb-3">
                <h1 className="text-3xl text-primary font-bold">Contact Me</h1>
                <form action="https://formspree.io/f/xrgvpjaj" method="POST">
                    <label className="text-xl">Email</label><br/>
                    <input type="email" name="email" className="border border-gray-400 border-solid rounded w-2/3 mb-2 h-8 md:w-1/2 p-2"/>
                    <br />
                    <label className="text-xl">Message</label><br/>
                    <textarea name="message" className="border border-gray-400 border-solid rounded w-2/3 mb-2 h-20 md:w-1/2 p-2"/>
                    <br />
                    <button type="submit" className="text-xl bg-indigo-600 text-white rounded shadow hover:bg-indigo-800 transition w-2/3 md:w-1/2 md:p-2">Send</button>
                </form>
            </div>
        </section>

      );

}

export default Contact;