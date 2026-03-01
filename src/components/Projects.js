import { FaGithub, FaExternalLinkAlt, FaServer } from "react-icons/fa";
import profileImg1 from './pictures/dairy.png';
import profileImg2 from './pictures/food.png';
import profileImg3 from './pictures/portfolio.png'
function Projects() {
  const projects = [
    {
      id: 1,
      title: "My Portfolio",
      description:
        "My first portfolio created as a beginner freelancer to showcase basic websites and skills in HTML, CSS, and JavaScript.",
      image: profileImg3,
      live_url: "https://yaganti-spandana.netlify.app/",
      github_url: "https://github.com/yaganti-spandana/portfolio.git",
      note: "⚠️ functionality is limited, but shows my starting journey as a freelancer."
    },
    
    {
      id: 2,
      title: "Online Food Delivery System",
      description:
        "Online food ordering system with cart, orders and admin dashboard.",
      image: profileImg2,
      live_url: "https://indianpepperandlime.netlify.app/",
      github_url: "https://github.com/Yaganti-Spandana/inpepli.git",
      backend_url: "https://auth-123.onrender.com/",
      note: "⚠️ Open the Backend first (Render free tier may take 30–60s to wake), then open the Live Demo."
    },{
      id: 3,
      title: "Dairy Farm Management System",
      description:
        "A full-stack system for managing animal records, milk production, sales, expenses and profit/loss.",
      image: profileImg1,
      live_url: "https://farm-dairy.netlify.app/",
      github_url: "https://github.com/Yaganti-Spandana/farm.git",
      backend_url: "https://farm-pgi5.onrender.com/",
      note: "⚠️ Open the Backend first (Render free tier may take 30–60s to wake), then open the Live Demo."
    },
  ];

  return (
    <section className="projects container" id="projects">
      <h2 className="gradient-text">Projects</h2>
      <div className="projects-grid">
        {projects.map(p => (
          <div className="project-card" key={p.id}>
            <img src={p.image} alt={p.title} />
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="project-links">
              {p.backend_url && (
                <a 
                  href={p.backend_url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-backend"
                >
                  <FaServer /> Backend
                </a>
              )}
              <a 
                href={p.live_url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-live"
              >
                <FaExternalLinkAlt /> Live
              </a>
              <a 
                href={p.github_url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-github"
              >
                <FaGithub /> GitHub
              </a>
            </div>
            {p.note && <p className="project-note">{p.note}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
