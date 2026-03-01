import React, { useRef, useState } from "react";
import { Element } from "react-scroll";

function ContactForm() {
  const form = useRef();
  const [hiddenField, setHiddenField] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    // honeypot bot check
    if (e.target.website.value) return;

    const formData = {
      name: e.target.user_name.value,
      email: e.target.user_email.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch("/.netlify/functions/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.ok) {
        alert("Message sent successfully!");
        e.target.reset();
      } else {
        alert("Failed to send message.");
      }
    } catch (err) {
      alert("Error sending message.");
      console.error(err);
    }
  };

  return (
    // ⭐⭐⭐ THIS FIXES YOUR SCROLL ISSUE ⭐⭐⭐
    <Element name="contact" className="contact-section">
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <h2>Contact Me</h2>

        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
        />

        {/* Honeypot field */}
        <input
          type="text"
          name="website"
          style={{ display: "none" }}
          value={hiddenField}
          onChange={(e) => setHiddenField(e.target.value)}
        />

        <button type="submit">Send</button>
      </form>
    </Element>
  );
}

export default ContactForm;
