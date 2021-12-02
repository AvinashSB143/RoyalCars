import { useEffect, useState, useRef } from "react";
import "./recomendation.css";

const RecommendedCars = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const cars = [
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-chevrolet-corvette-z06-1607016574.jpg?crop=0.737xw:0.738xh;0.181xw,0.218xh&resize=640:*",
    "https://cdn.luxe.digital/media/2020/12/15110747/fastest-cars-world-2021-luxe-digital%402x.jpg",
    "https://cdni.autocarindia.com/ExtraImages/20210610035741_Creta.jpg",
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
          {cars.map((images, index) => (
            <img
              className="slideImg"
              src={images}
              alt={`Recommendation_${index}`}
            />
          ))}
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
