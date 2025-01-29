import React from 'react';
import { useMainContext } from '../contexts/MainContext';

const MainNav = () => {

    const {
        ricercaFilm,
        fetchData,
        titoloRicercato,
    } = useMainContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData();
    };

    return (
        <div className="container-fluid p-0">
            <nav className="navbar navbar-dark bg-dark justify-content-between px-5 w-100">
                <a className="navbar-brand">Navbar</a>

                <form className="form-inline" onSubmit={handleSubmit}>
                    <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Cerca film..."
                        aria-label="Search"
                        value={titoloRicercato}
                        onChange={ricercaFilm}
                    />
                    <button type="submit" className="btn btn-outline-info ml-2">
                        Cerca
                    </button>
                </form>
            </nav>
        </div>
    );
};

export default MainNav;
