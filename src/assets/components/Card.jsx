import { useMainContext } from "../contexts/MainContext"

const Card = ({ item }) => {

    const { bandierina } = useMainContext()
    const bandiera = bandierina(item.original_language)

    return (

        <div className="card card-custom">
            <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title}
                className="card-img-top card-custom-img"
            />

            <div className="card-custom-info text-center">
                <h5>{item.title}</h5>
                <h6 className="text-dark-emphasis">{item.original_title}</h6>
                <img className="w-25" src={bandiera} alt={item.original_language} />
                <p>{bandiera}</p>
                <p>{item.vote_average}</p>
                <p>{item.overview}</p>
            </div>
        </div>
    );
};

export default Card;


