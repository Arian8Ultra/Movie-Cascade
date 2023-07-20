/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { useState } from "react";
import Cascade from "../Cascade/Cascade";
import { Movie } from "../../data/movies";
import "./CascadeBox.css";
const CascadeBox = () => {
  const [curentMovie, setCurrentMovie] = useState<Movie>();
  return (
    <div className='main_cascade_box'>
      <div
        className='backdrop'
        style={{
          backgroundImage: `url(${curentMovie?.image})`,
          backgroundSize: "cover",
        }}
      >
        <div className="detail">
          <h1>{curentMovie?.title}</h1>
          <h3>{curentMovie?.year}</h3>
          <p>{curentMovie?.description}</p>
          
        </div>
        <div className='cascade_box'>
          <Cascade setCurrentMovie={setCurrentMovie} />
        </div>
      </div>
    </div>
  );
};

export default CascadeBox;
