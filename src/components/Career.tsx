import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Video Editor</h4>
                <h5>VYUHA-Student Club, KL University</h5>
              </div>
              <h3>2023–2024</h3>
            </div>
            <p>
              Editing videos for student events and awareness campaigns using DaVinci Resolve and Adobe Premiere Pro.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Marketing Intern</h4>
                <h5>AssuredGig</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Creating promotional videos and motion graphics to support digital marketing campaigns and brand visuals.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Video Editor</h4>
                <h5>KL Student Affairs, KL University</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Present
              Producing videos for student initiatives, institutional events, and official university communications, with a focus on brand-aligned content and advanced DaVinci Resolve Fusion workflows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
