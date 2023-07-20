import { useEffect, useState } from "react";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { Movie, movies } from "../../data/movies";
import MovieCard from "../MovieCard/MovieCard";
import "./Cascade.css";
interface Props {
  currentMovieIndex?: number;
  setMovieIndex?: (index: number) => void;
  currentMovie?: Movie;
  setCurrentMovie?: (movie: Movie) => void;
}
const Cascade = ({ setCurrentMovie,...props }: Props) => {
  const [movieIndex, setMovieIndex] = useState(0);
  useEffect(() => {
    setCurrentMovie && setCurrentMovie(movies[movieIndex]);
  },[movieIndex, setCurrentMovie])

  useEffect(() => {
    if (props.currentMovieIndex) {
      setMovieIndex(props.currentMovieIndex);
    }
  }
  , [props.currentMovieIndex]);

  return (
    <div className='mainBox'>
      <div
        className='back_button'
        onClick={() => {
          const mainGrid = document.getElementById("main_grid");
          if (mainGrid) {
            mainGrid.scrollBy({ left: 120, behavior: "smooth" });
            if (movieIndex > 0) {
              setMovieIndex(movieIndex - 1);

              setCurrentMovie && setCurrentMovie(movies[movieIndex - 1]);
            }
          }
        }}
      >
        <BiSolidRightArrow size={50} />
      </div>
      <div
        className='forward_button'
        onClick={() => {
          const mainGrid = document.getElementById("main_grid");
          if (mainGrid) {
            mainGrid.scrollBy({ left: -120, behavior: "smooth" });
            if (movieIndex < movies.length - 1) {
              setMovieIndex(movieIndex + 1);
              setCurrentMovie && setCurrentMovie(movies[movieIndex + 1]);
            }
          }
        }}
      >
        {/* <BiSolidSkipPreviousCircle size={50} /> */}
        <BiSolidLeftArrow size={50} />
      </div>
      <div className='main_grid' id='main_grid'>
        {movies.map((movie, index) => (
          <MovieCard
            title={movie.title}
            image={movie.image}
            link={movie.link}
            isFocused={index === movieIndex}
            index={index}
            setMovieIndex={setMovieIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default Cascade;
