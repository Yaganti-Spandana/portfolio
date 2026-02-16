import React, { useRef } from "react";

function ContactForm() {
  const form = useRef();

  // Optional honeypot field for bots
  const [hiddenField, setHiddenField] = React.useState("");

  const sendEmail = async (e) => {
  e.preventDefault();

  const formData = {
    name: e.target.user_name.value,
    email: e.target.user_email.value,
    message: e.target.message.value,
  };

  // Optional honeypot
  if (e.target.website.value) return; // bot detected

  try {
    const res = await fetch('/.netlify/functions/sendEmail', {
      method: 'POST',
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (data.ok) {
      alert('Message sent successfully!');
      e.target.reset();
    } else {
      alert('Failed to send message.');
    }
  } catch (err) {
    alert('Error sending message.');
    console.error(err);
  }
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
