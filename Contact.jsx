export default function Contact() {
  return (
    <section id="contact" className="bg-dark text-white py-5">
      <div className="container">
        <h2 className="text-info text-center mb-5">Contact Me</h2>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card bg-secondary text-white shadow-lg p-4">

              <div className="mb-3">
                <h5 className="text-info">Email</h5>
                <p className="mb-0">
                  <a 
                    href="mailto:onaiza91@email.com"
                    className="text-white text-decoration-none"
                  >
                    onaiza91@email.com
                  </a>
                </p>
              </div>

              <div className="mb-3">
                <h5 className="text-info">Location</h5>
                <p className="mb-0">UET Taxila, Pakistan</p>
              </div>

              <div className="mb-3">
                <h5 className="text-info">LinkedIn</h5>
                <p className="mb-0">
                  <a
                     href="https://www.linkedin.com/in/onaiza-maryam-9657bb2a3/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-decoration-none"
                  >
                    linkedin.com/in/Onaiza Maryam
                  </a>
                </p>
              </div>

              <div>
                <h5 className="text-info">GitHub</h5>
                <p className="mb-0">
                  <a
                    href="https://github.com/Onaiza50"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-decoration-none"
                  >
                    github.com/Onaiza50
                  </a>
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
