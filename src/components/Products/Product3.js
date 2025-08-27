import React from "react";

function Product3() {
  return (
    <section>
      <h1>Planetary Delivery</h1>

      {/* Video Trailer */}
      <div className="video-container">
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/V-_O7nl0Ii0"
          title="Planetary Delivery Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Links */}
      <div className="product-links">
        <a href="https://www.planetarydelivery.com" target="_blank" rel="noopener noreferrer">
          Visit Website
        </a>
        <a href="https://github.com/planetarydelivery" target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a>
      </div>

      {/* Description */}
      <h2>Description</h2>
      <p>
        "Planetary Delivery" is a futuristic logistics application designed to manage 
        interplanetary shipments efficiently. It tracks deliveries across planets 
        and optimizes routes using AI.
      </p>
      <p>
        Users can schedule shipments, monitor cargo, and receive live updates. The platform 
        is built with React, Node.js, and cloud services for global scalability.
      </p>
    </section>
  );
}

export default Product3;