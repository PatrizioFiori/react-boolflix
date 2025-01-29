import { useEffect } from "react";
import { useMainContext } from "../contexts/MainContext";
import Card from "../components/Card";

const HomePage = () => {
    const { titoloRicercato, listaFilm, listaSerie, fetchData } = useMainContext();

    useEffect(() => {
        fetchData(titoloRicercato);
    }, []);

    if (!titoloRicercato || titoloRicercato.trim().length === 0) {
        return (
            <div className="homepage-container text-center">
                <h1>Benvenuto!</h1>
                <p className="text-dark-emphasis">
                    Usa la barra di ricerca per trovare film e serie tv!
                </p>
            </div>
        );
    }

    return (
        <div className="homepage-container">
            <div className="container my-4">
                <div className="row mb-4">
                    <h1>Film</h1>
                    {listaFilm.map((item) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={item.id}>
                            <Card item={item} />
                        </div>
                    ))}
                </div>
                <hr className="text-danger" />
                <hr className="text-danger" />
                <div className="row mb-4">
                    <h1>Serie TV</h1>
                    {listaSerie.map((item) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={item.id}>
                            <Card item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
