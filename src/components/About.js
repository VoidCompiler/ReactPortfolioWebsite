import React, { useEffect, useRef, useState } from "react";
import ThreeDRender from "./ThreeDRender";


function About() {
  const aboutRef = useRef();
  const topRowRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting); // true when About Me enters view, false when leaves
        });
      },
      { threshold: 0.3 } // triggers when 30% visible
    );

    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section">
      {/* Top row: title and 3D cube */}
      <div
        ref={topRowRef}
        className={`top-row ${isVisible ? "fade-out" : ""}`}
      >
        <h1 className="portfolio-title">VILLE KORPIAHO PORTFOLIO</h1>
        <div className="about-render">
          <ThreeDRender />
        </div>
      </div>

      {/* Bottom row: About Me content */}
      <div
        ref={aboutRef}
        className={`about-text ${isVisible ? "visible" : ""}`}
      >
        <h2>About Me</h2>
        <p>
          Hi! I’m a software engineer with a degree in Information and Communication Technology.
          For the past four years, I’ve run my own company as a software developer, primarily
          working in C++. I thrive on technically challenging projects and enjoy learning new
          tools and technologies quickly.
        </p>
        <p>
          I have experience across multiple roles, including Software Developer, Game Developer,
          Full Stack, Backend, and Frontend development. My technical skills include Python,
          JavaScript, Java, C#, C++, React, HTML, and game engines like Unreal Engine and Unity,
          with experience in multiplayer game development.
        </p>
        <p>
          I’ve been programming as a hobby for over 10 years, which has helped me adapt rapidly
          to new languages and frameworks. I’m persistent, proactive, and naturally collaborative.
          I enjoy pushing projects to completion. One of my recent projects involved thousands
          of hours of full-time development, demonstrating both dedication and technical breadth.
        </p>
        <p>
          Beyond coding, I’ve founded a startup, participated in the Boost accelerator, won a pitch
          competition, and taught programming to thousands worldwide through my YouTube channel
          with over 700,000 views. Curiosity and continuous learning drive me, both professionally
          and personally.
        </p>
      </div>
    </section>
  );
}

export default About;