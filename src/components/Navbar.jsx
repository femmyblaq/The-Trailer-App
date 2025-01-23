import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                    <p className="m-0 line-height-1">The <i className="ri-film-fill"></i></p>
                    <p className="m-0 fs-6 fw-bold">Movie<span className="text-primary">App</span></p>
                    </Link>
                    <div className="nav-links">
                        <ul className="list-unstyled d-flex gap-3">
                            <li>
                                <Link to="/" className="text-decoration-none text-white">Home</Link>
                            </li>
                            <li>
                                <Link to="/favorite" className="text-decoration-none text-white">Favorite</Link>
                            </li>
                            <li>
                                <Link to="/create" className="text-decoration-none text-white">Create</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}


export default Navbar