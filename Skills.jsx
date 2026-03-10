export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Bootstrap",
    "Git",
  ];

  return (
    <section id="skills" className="bg-light py-5">
      <div className="container">
        <h2 className="text-center text-info mb-4">Skills</h2>

        <div className="row">
          {skills.map((skill, index) => (
            <div key={index} className="col-md-4 mb-3">
              <div className="card shadow-sm text-center p-3">
                {skill}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
