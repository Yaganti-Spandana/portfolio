function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Praveen",
      position: "Farm Manager",
      feedback:
        "Earlier we used notebooks. Now everything is digital and well organized."
    },
    {
      id: 2,
      name: "Surya",
      position: "Business Owner",
      feedback:
        "Very satisfied with the food delivery website. Easy to use and professional."
    }
  ];

  return (
    <section className="testimonials container" id="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial-grid">
        {testimonials.map(t => (
          <div className="testimonial-card" key={t.id}>
            <p>"{t.feedback}"</p>
            <h4>{t.name}</h4>
            <span>{t.position}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Testimonials