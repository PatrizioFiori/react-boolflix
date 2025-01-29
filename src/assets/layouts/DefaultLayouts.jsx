import { Outlet } from "react-router-dom"
import MainNav from "../components/MainNav"
import Footer from "../components/Footer"

const DefaultLayout = () => {
    return (
        <>
            <header>
                <MainNav />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default DefaultLayout