import { useMainContext } from "../contexts/MainContext";

const MainNav = () => {
    const {
        titoloRicercato,
        setTitoloRicercato,
        fetchData
    } = useMainContext();

    const handleChange = (e) => {
        fetchData(e.target.value);
        setTitoloRicercato(e.target.value);
    };

    return (
        <div className="container-fluid p-0">
            <nav className="navbar navbar-dark bg-dark justify-content-between px-5 w-100">
                <span className="navbar-brand">Navbar</span>

                <div className="form-inline">
                    <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Cerca...."
                        aria-label="Search"
                        value={titoloRicercato}
                        onChange={handleChange}
                    />
                </div>
            </nav>
        </div>
    );
};

export default MainNav;
