import { useMainContext } from "../contexts/MainContext"

const Card = ({ film }) => {
    return (

        <div className="card card-custom">
            <img
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                alt={film.title}
                className="card-img-top card-custom-img"
            />

            <div className="card-custom-info text-center">
                <h5>{film.title}</h5>
                <h6 className="text-dark-emphasis">{film.original_title}</h6>
                <p>{film.original_language}</p>
                <p>{film.vote_average}</p>
                <p>{film.overview}</p>
            </div>
        </div>
    );
};

export default Card;


