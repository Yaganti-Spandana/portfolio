import React, { useRef } from "react";
import emailjs from "emailjs-com";

function ContactForm() {
  const form = useRef();

  // Optional honeypot field for bots
  const [hiddenField, setHiddenField] = React.useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    // If honeypot is filled, block submission
    if (hiddenField) {
      console.log("Bot detected! Submission blocked.");
      return;
    }

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
    .then((result) => {
      console.log("Email sent:", result.text);
      alert("Message sent successfully!");
      e.target.reset(); // reset form
    })
    .catch((error) => {
      console.log("Error:", error.text);
      alert("Failed to send message. Try again later.");
    });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form">
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
  );
}

export default ContactForm;
