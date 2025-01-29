import { useMainContext } from "../contexts/MainContext";

const Card = ({ item }) => {
    const bandiera =
        item.original_language === "en"
            ? "GB"
            : item.original_language === "ja"
                ? "JP"
                : item.original_language === "ko"
                    ? "KR"
                    : item.original_language.toUpperCase();
    // Non posso controllare tutta l'api per fixxare maiuscole e minuscole sta bene cosi ! =D

    const fullStars = Math.max(1, Math.min(5, Math.round(item.vote_average / 2)));

    return (
        <div className="card card-custom">
            <img
                src={item.poster_path
                    ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                    : "https://placehold.co/500x750"}
                alt={item.title}
                className="card-img-top card-custom-img"
            />

            <div className="card-custom-info text-center">
                <h5>{item.title}</h5>
                <h6 className="text-dark-emphasis">{item.original_title}</h6>
                <img src={`https://flagsapi.com/${bandiera}/flat/64.png`} alt={item.original_language} />
                <p>{fullStars} stelle su 5</p>
                <div>
                    {/* da approfondire e vedere se si può sistemare per renderlo più scorrevole */}
                    {[...Array(fullStars)].map((_, i) => (
                        <i key={i} className="fa-solid fa-star text-warning"></i>
                    ))}
                    {[...Array(5 - fullStars)].map((_, i) => (
                        <i key={i + fullStars} className="fa-regular fa-star text-secondary"></i>
                    ))}
                </div>
                <p className="pt-3">{item.overview}</p>
            </div>
        </div>
    );
};

export default Card;

