import { createContext, useContext, useState } from "react";
import axios from "axios";

const MainContext = createContext();

const MainProvider = ({ children }) => {
    const key = import.meta.env.VITE_API_KEY;

    const movieUrl = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=`;
    const tvUrl = `https://api.themoviedb.org/3/search/tv?api_key=${key}&query=`;

    const [titoloRicercato, setTitoloRicercato] = useState("");
    const [listaFilm, setListaFilm] = useState([]);
    const [listaSerie, setListaSerie] = useState([]);

    const fetchData = (ricerca) => {
        if (!ricerca) {
            setListaFilm([]);
            setListaSerie([]);
            return;
        }

        axios.get(movieUrl + ricerca)
            .then((res) => {
                setListaFilm(res.data.results || []);
            })
            .catch((err) => console.error("Errore fetch Film:", err));

        axios.get(tvUrl + ricerca)
            .then((res) => {
                setListaSerie(res.data.results || []);
            })
            .catch((err) => console.error("Errore fetch Serie:", err));
    };

    const value = {
        titoloRicercato,
        setTitoloRicercato,
        listaFilm,
        setListaFilm,
        listaSerie,
        setListaSerie,
        fetchData,
    };

    return (
        <MainContext.Provider value={value}>
            {children}
        </MainContext.Provider>
    );
};

const useMainContext = () => useContext(MainContext);

export { MainProvider, useMainContext };
