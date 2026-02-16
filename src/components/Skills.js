function Skills() {
  const skills = [
    { name:'React', level:'90%' },
    { name:'Django', level:'85%' },
    { name:'JavaScript', level:'85%' },
    { name:'HTML/CSS', level:'95%' },
    { name:'SQL', level:'90%' },
  ];

  return (
    <section className="skills container" id="skills">
      <h2>Skills</h2>
      {skills.map(skill => (
        <div className="skill" key={skill.name}>
          <div className="skill-name">
            <span>{skill.name}</span>
            <span>{skill.level}</span>
          </div>
          <div className="skill-bar">
            <div className="skill-bar-fill" style={{'--skill-width':skill.level}}></div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;

