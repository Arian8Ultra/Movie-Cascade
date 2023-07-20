import "./MovieCard.css";

interface Props {
  isFocused?: boolean;
  image?: string;
  link?: string;
  title?: string;
  index?: number;
  setMovieIndex?: (index: number) => void;
}
const MovieCard = (props: Props) => {
  return (
    <div
      className='main'
      style={{
        zIndex: props.isFocused ? 10 : 0,
        opacity: props.isFocused ? 1 : 0.5,
        transition: "all 0.5s ease",
      }}
      onClick={() => {
        if (props.setMovieIndex)
          props.setMovieIndex(props.index || 0);

          if(props.isFocused){
            window.open(props.link || "", "_blank");
          }
      }}
    >
      <img
        src={props.image}
        alt={props.title}
        className='background_image'
      />
      <div
        className='forground'
        style={{
          background: props.isFocused
            ? "rgba(0,0,0,0.1)"
            : "rgba(0,0,0,0)",
          opacity: props.isFocused ? 1 : 0,
        }}
      ></div>
    </div>
  );
};

export default MovieCard;
