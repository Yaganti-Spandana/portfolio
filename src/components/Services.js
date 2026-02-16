function Services() {
  const services = ['Web Development','Full Stack Applications','API Integration','Responsive Design','Portfolio Websites'];

  return (
    <section className="services container" id="services">
      <h2>Services</h2>
      <div style={{display:'flex',flexWrap:'wrap',gap:'2rem',justifyContent:'center'}}>
        {services.map(s => (
          <div className="service-card" key={s}>
            <h3>{s}</h3>
            <p>Professional {s.toLowerCase()} tailored to your needs.</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;

