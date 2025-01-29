import { useEffect } from "react";
import { useMainContext } from "../contexts/MainContext";
import Card from "../components/Card";

const HomePage = () => {
    const {
        titoloRicercato,
        listaFilm,
        listaSerie,
        fetchData
    } = useMainContext();

    useEffect(() => {
        fetchData(titoloRicercato);
    }, []);

    return (
        <div className="container my-4">
            <div className="row mb-4">
                <h2>Film</h2>
                {listaFilm.map((item) => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={item.id}>
                        <Card item={item} />
                    </div>
                ))}
            </div>

            <div className="row mb-4">
                <h2>Serie TV:</h2>
                {listaSerie.map((item) => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={item.id}>
                        <Card item={item} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;

