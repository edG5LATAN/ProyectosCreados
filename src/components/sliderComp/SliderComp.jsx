import React, { useState } from "react";
import "./SliderComp.css";

const SliderComp = ({ lista, title = "Our Projects" }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === lista.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? lista.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slide-container">
      <h2 className="slide-main-title">{title}</h2>

      <div className="slideshow-wrapper">
        <div className="slideshow-container">
          <div className="slide-card" key={lista[currentSlide].id}>
            <div className="slide-image-container">
              <img
                src={lista[currentSlide].imagen}
                alt={lista[currentSlide].title}
                className="slide-image"
              />
              <div
                className="image-overlay"
                style={{
                  backgroundColor:
                    lista[currentSlide].overlayColor || "#4a6fa5",
                }}
              ></div>
            </div>

            <div className="slide-content">
              <h3 className="slide-title">{lista[currentSlide].titulo}</h3>
              <p className="slide-description">
                {lista[currentSlide].informacion}
              </p>
              <a
                href={lista[currentSlide].url}
                className="demo-button"
                target="_blank"
              >
                Ver Demo
              </a>
            </div>
          </div>
        </div>

        <div className="slideshow-controls">
          <button className="mobile-nav-button" onClick={prevSlide}>
            Previous
          </button>

          <div className="dots-container">
            {lista.map((slide, index) => (
              <button
                key={slide.id}
                className={`dot ${index === currentSlide ? "active" : ""}`}
                onClick={() => goToSlide(index)}
              ></button>
            ))}
          </div>

          <button className="mobile-nav-button" onClick={nextSlide}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderComp;
