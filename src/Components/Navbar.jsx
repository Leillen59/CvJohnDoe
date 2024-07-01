import { NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer";




export default function Navbar () {


    return (
        <>
            <header className="header-nav z-3">
                <nav className="navbar navbar-expand-lg bg-dark z-3" data-bs-theme="dark">

                    <div className="container-fluid">

                        <h1 className="navbar-brand ms-5"><NavLink className="nav-link" to="/">JOHN DOE</NavLink></h1>
                        <button className="navbar-toggler me-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            
                            <span className="navbar-toggler-icon"></span>

                        </button>

                        <div className="collapse auto navbar-collapse justify-content-end " id="navbarNav">

                            <ul className="navbar-nav gap-3 me-5">
                                <NavLink className="nav-link" to="/">Accueil</NavLink>
                                <NavLink className="nav-link" to="/services">Services</NavLink>
                                <NavLink className="nav-link" to="/realisations">Réalisations</NavLink>
                                <NavLink className="nav-link" to="/blog">Blog</NavLink>
                                <NavLink className="nav-link" to="/me-contacter">Me contacter</NavLink>
                            </ul>

                        </div>

                    </div>
                </nav>
            </header>

            <main>
                <Outlet />

                <footer className="bg-secondary-subtle">
                    <Footer />
                </footer>
            </main>
        </>
    )
}