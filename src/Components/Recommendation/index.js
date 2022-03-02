import { useEffect, useState, useRef } from "react";
import "./recomendation.css";

import HeroBanner1 from "../../assests/hero1.jpg";
import HeroBanner2 from "../../assests/hero2.jpg";
import HeroBanner3 from "../../assests/hero3.jpg";
import mainHero from "../../assests/mainHero.jpg";

const RecommendedCars = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const cars = [
    mainHero
  ];
  const delay = 2000;

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === cars.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="root_container">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        <div className="slidedWrapper">
          {/* {cars.map((images, index) => ( */}
            <img
              className="slideImg"
              src={mainHero}
              alt={`Recommendation_${index}`}
            />
          {/* ))} */}
        </div>
      </div>

      <div className="slideshowDots">
        {cars.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedCars;
