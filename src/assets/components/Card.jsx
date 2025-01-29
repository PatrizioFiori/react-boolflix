import { useMainContext } from "../contexts/MainContext";

const Card = ({ item }) => {
    let bandiera = "";

    if (item.original_language === "en") {
        bandiera = "GB";
    } else if (item.original_language === "ja") {
        bandiera = "JP";
    } else {
        bandiera = item.original_language.toUpperCase();
    }
    // Non posso controllare tutta l'api per fixxare maiuscole e minuscole XD

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
                <img src={`https://flagsapi.com/${bandiera}/flat/64.png`} alt={item.original_language} />
                <p>{item.vote_average}</p>
                <p>{item.overview}</p>
            </div>
        </div>
    );
};

export default Card;

