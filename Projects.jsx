export default function Projects() {
  const projects = [
    {
      title: "Salon Appointment",
      
      githubLink: "https://github.com/Onaiza50/project",
    },
  ];

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="text-center text-info mb-4">Projects</h2>

        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="card shadow-lg p-4">
                <h5>{project.title}</h5>
                <p>{project.description}</p>

                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-info btn-sm"
                >
                  View Project [GitHub]
                </a>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
