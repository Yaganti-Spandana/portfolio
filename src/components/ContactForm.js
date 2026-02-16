import emailjs from "emailjs-com";

function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "",
      "",
      e.target,
      ""
    )
    .then(() => alert("Message sent!"))
    .catch((err) => {
  console.log("EmailJS error:", err);
});
  };

  return (
    <section className="contact container" id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" required />
        <input name="email" placeholder="Email" required />
        <input name="subject" placeholder="Subject" required />
        <textarea name="message" placeholder="Message" required />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
export default ContactForm
