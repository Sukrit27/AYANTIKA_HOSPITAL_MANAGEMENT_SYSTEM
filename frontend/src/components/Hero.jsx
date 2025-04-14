import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          MedAlign is a state-of-the-art health center dedicated to holistic physiotherapy and rehabilitative care. Our highly skilled staff is devoted to providing tailored treatment programs addressing the specific objectives and lifestyle of each patient. MedAlign prioritizes the recovery of mobility, the promotion of faster healing, and overall well-being through the best-in-class care and research-based methods.MedAlign is a state-of-the-art health center dedicated to holistic physiotherapy and rehabilitative care. Our highly skilled staff is devoted to providing tailored treatment programs addressing the specific objectives and lifestyle of each patient. MedAlign prioritizes the recovery of mobility, the promotion of faster healing, and overall well-being through the best-in-class care and research-based methods.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
