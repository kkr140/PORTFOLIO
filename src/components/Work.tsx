import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "OKA NIRNAYAM",
    category: "",
    tools: "",
    image: "/images/3.png",
    link: "https://drive.google.com/file/d/1Ebkrx8AiSKw4sporQkqY4S7ho3csro6Y/view?usp=sharing",
  },
  {
    title: "Beyond the Vision: A Plan of Action",
    category: "",
    tools: "",
    image: "/images/2.png",
    link: "https://drive.google.com/file/d/1w_E7Pt28PREvCV7E7Kv39eanCUkH_A4i/view?usp=sharing",
  },
  {
    title: "Why We Shifted Our Entire Back-End to AWS",
    category: "",
    tools: "",
    image: "/images/4.png",
    link: "https://drive.google.com/file/d/1T9iL_KaaWUtZCrPH76n4x2_8U1OVg1yy/view?usp=sharing",
  },
  {
    title: "Pivot to Scale: How Shifting to AWS Saved Our MVP",
    category: "",
    tools: "",
    image: "/images/5.png",
    link: "https://drive.google.com/file/d/1pDoT4vNLD0V4kFZyBIOlZF2VGdJE5mRk/view?usp=sharing",
  },
  {
    title: "Stop Making the Same Mistakes",
    category: "",
    tools: "",
    image: "/images/6.png",
    link: "https://drive.google.com/file/d/1QG6x1gN9YyDGB3exZ92coKT0-5ncCqdv/view?usp=sharing",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          {project.link ? (
                            <a 
                              href={project.link} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="tools-label" 
                              style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
                            >
                              OPEN
                            </a>
                          ) : (
                            <span className="tools-label">OPEN</span>
                          )}
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
