import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, setTours, removeTour }) => {
  return (
    <section>
      <Tour tours={tours} setTours={setTours} removeTour={removeTour} />
    </section>
  );
};

export default Tours;
