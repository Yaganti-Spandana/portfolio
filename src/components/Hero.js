import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero" id="home">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="gradient-text">Hi, I'm Spandana Yaganti</h1>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Aspiring Freelancer & Full Stack Web Developer
        <br />
        Building modern websites with React & Django
      </motion.p>
      <div> <a href="#contact" className="primary">Hire Me</a> <a href="#projects" className="secondary">View Projects</a> </div>
    </section>
  );
}

export default Hero;

