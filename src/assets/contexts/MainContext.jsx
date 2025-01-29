// Inserire la gestione delle lingue e delle stelline per le recensioni

import { createContext, useState, useContext } from "react";
import axios from "axios";

const MainContext = createContext();

const MainProvider = ({ children }) => {
    const key = "55eedc918504d38dfb97a444ce2ec149";
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=`;

    const [listaFilm, setListaFilm] = useState([]);
    const [titoloRicercato, setTitoloRicercato] = useState("");

    const fetchData = () => {
        axios
            .get(url + titoloRicercato)
            .then((res) => {
                setListaFilm(res.data.results);
            })
            .catch((error) => {
                console.error("Errore durante il fetchData:", error);
            });
    };

    const ricercaFilm = (e) => {
        setTitoloRicercato(e.target.value);
    };


    const value = {
        ricercaFilm,
        fetchData,
        titoloRicercato,
        setTitoloRicercato,
        listaFilm,
        setListaFilm,
    };

    return (
        <MainContext.Provider value={value}>
            {children}
        </MainContext.Provider>
    )
};

const useMainContext = () => useContext(MainContext)

export { useMainContext, MainProvider };
