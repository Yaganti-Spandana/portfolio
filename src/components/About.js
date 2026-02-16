import profileImg from './pictures/image.jpeg';

function About() {
  return (
    <section className="about container" id="about">
      <img src={profileImg} alt="John Doe" />
      <div className="about-text">
        <h2>About Me</h2>
        <p>I am a Full Stack Developer specializing in React and Django. I build responsive websites and web applications with clean code.</p>
      </div>
    </section>
  );
}

export default About;

