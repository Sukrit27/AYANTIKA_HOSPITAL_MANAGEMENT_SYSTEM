import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          At MedAlign, our passion is helping you move with confidence, feel stronger every day, and live free from pain. As a trusted name in physiotherapy and rehabilitation, we're committed to delivering care that's not just effective — but thoughtfully tailored to your individual journey.

Whether you're healing from an injury, managing a long-term condition, or aiming to improve your physical performance, our expert team is here to support you every step of the way. We blend proven treatment methods with a personalized touch, ensuring you get the care that truly fits your needs.

Our modern facility is equipped with the latest techniques and technologies, all within a welcoming, patient-centered environment designed to help you feel at ease.

At MedAlign, your well-being is our priority. We believe in empowering you with the knowledge and guidance you need to take charge of your recovery — and reach your full potential.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
