import React from "react";
import { useState } from "react";

const Tour = ({ tours, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      {tours.map((tour) => {
        const { id, image, name, info, price } = tour;
        return (
          <div className="single-tour">
            <img src={image} alt="" />
            <footer>
              <div className="tour-info" key={id}>
                <h4>{name}</h4>
                <div className="tour-price">${price}</div>
              </div>
              <p>
                {readMore ? info : `${info.substring(0, 200)}...`}
                <button onClick={() => setReadMore(!readMore)}>
                  {readMore ? "showLess" : "readMore"}
                </button>
              </p>
              <button className="delete-btn" onClick={() => removeTour(id)}>
                Not Interested
              </button>
            </footer>
          </div>
        );
      })}
    </>
  );
};

export default Tour;
