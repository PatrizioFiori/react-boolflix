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

    const bandierina = (lingua) => {
        switch (lingua) {
            case 'en':
                return 'https://flagsapi.com/GB/shiny/64.png';
            case 'it':
                return 'https://flagsapi.com/IT/shiny/64.png';
            case 'es':
                return 'https://flagsapi.com/ES/shiny/64.png';
            case 'fr':
                return 'https://flagsapi.com/FR/shiny/64.png';
            case 'de':
                return 'https://flagsapi.com/DE/shiny/64.png';
            case 'pt':
                return 'https://flagsapi.com/PT/shiny/64.png';
            case 'ru':
                return 'https://flagsapi.com/RU/shiny/64.png';
            case 'ja':
                return 'https://flagsapi.com/JP/shiny/64.png';
            case 'zh':
                return 'https://flagsapi.com/CN/shiny/64.png';
            case 'ko':
                return 'https://flagsapi.com/KR/shiny/64.png';
            case 'hi':
                return 'https://flagsapi.com/IN/shiny/64.png';
            case 'ar':
                return 'https://flagsapi.com/SA/shiny/64.png';
            default:
                return "";
        }
    };

    const fetchData = (ricerca) => {
        if (!ricerca) {
            setListaFilm([]);
            setListaSerie([]);
            return;
        }

        axios
            .get(movieUrl + ricerca)
            .then((res) => {
                setListaFilm(res.data.results || []);
            })
            .catch((err) => console.error("Errore fetch Film:", err));

        axios
            .get(tvUrl + ricerca)
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
        bandierina,
    };

    return (
        <MainContext.Provider value={value}>
            {children}
        </MainContext.Provider>
    );
};

const useMainContext = () => useContext(MainContext);

export { MainProvider, useMainContext };
