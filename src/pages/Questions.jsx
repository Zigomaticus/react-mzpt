import React from "react";
import slide1 from "../images/slide1.jpg";
import slide2 from "../images/slide2.jpg";
import slide3 from "../images/slide3.jpg";
import slide4 from "../images/slide4.jpg";

function Questions() {
  return (
    <div className="questions">
      <div className="questions__text-1">Правила МОЗГОПАТИ kids</div>
      <div className="questions__promo">
        <iframe
          width="760"
          height="415"
          src="https://www.youtube.com/embed/k5N4pSFwX7g"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullscreen
        ></iframe>
      </div>
      <div className="questions__text">
        Примеры заданий из МОЗГОПАТИ
        <br />
        (листайте слайды чтобы увидеть вопросы и ответы)
      </div>
      <div className="wrapper">
        <div className="slider">
          <div className="slider-nav">
            <label htmlFor="s1" className="slider-nav-item"></label>
            <label htmlFor="s2" className="slider-nav-item"></label>
            <label htmlFor="s3" className="slider-nav-item"></label>
            <label htmlFor="s4" className="slider-nav-item"></label>
          </div>
          <div className="slider-items">
            <input type="radio" name="s" id="s1" />
            <input type="radio" name="s" id="s2" />
            <input type="radio" name="s" id="s3" />
            <input type="radio" name="s" id="s4" />
            <div className="item s1">
              <img src={slide1} alt="slide1" />
            </div>
            <div className="item">
              <img src={slide2} alt="slide2" />
            </div>
            <div className="item">
              <img src={slide3} alt="slide3" />
            </div>
            <div className="item">
              <img src={slide4} alt="slide4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questions;
