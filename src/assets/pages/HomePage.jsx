import { useEffect } from "react";
import { useMainContext } from "../contexts/MainContext";
import Card from "../components/Card";

const HomePage = () => {
    const { listaFilm, fetchData } = useMainContext();

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container my-4">
            <div className="row">
                <h1>Movie</h1>
                {listaFilm.map((film) => (
                    <div
                        className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
                        key={film.id}
                    >
                        <Card film={film} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
