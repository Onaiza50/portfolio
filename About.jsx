export default function About() {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Left Side */}
          <div className="col-lg-6 mb-4">
            <h2 className="text-info fw-bold mb-4">About Me</h2>

            <p className="text-muted">
              I am a <strong>Software Engineering undergraduate at UET Taxila</strong>,
              passionate about building practical and impactful software solutions.
              I enjoy creating real-world systems that combine logic, design,
              and problem-solving to produce meaningful results.
            </p>

            <p className="text-muted">
              I have developed projects such as a <strong>Jewelry Management System</strong>
              with role-based dashboards and graphical sales analysis, a
              <strong> Smart Grocery Store System</strong> with hardware integration and
              payment validation logic, and a <strong>Maze Escape Game</strong> featuring
              difficulty levels and timer-based mechanics.
            </p>

            <p className="text-muted">
              I have a strong foundation in <strong>Object-Oriented Programming (OOP)</strong> 
              and a solid grip on <strong>JavaScript</strong>. I also have a good understanding 
              of <strong>web architecture</strong> and <strong>database fundamentals</strong>, 
              which helps me design structured and scalable applications.
            </p>

            <p className="text-muted">
              My interests include software development, system design,
              networking concepts, and building intelligent systems.
            </p>
          </div>

          {/* Right Side */}
          <div className="col-lg-6">
            <div className="card shadow-lg border-0 p-4">
              <h5 className="text-info mb-3">Beyond Academics</h5>

              <p className="text-muted">
                I am deeply motivated to address societal challenges,
                particularly unemployment. I actively work on initiatives
                that empower uneducated women by teaching skills like
                stitching and data entry to help them achieve financial
                independence.
              </p>

              <p className="text-muted">
                My goal is to become a professional software engineer
                who builds technology that creates real social impact.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}