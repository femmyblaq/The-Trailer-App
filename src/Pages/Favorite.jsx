import "../Pages/Favorite.css"
import { useMovieContext } from "../context/MovieContext"
import MovieCard from "../components/MovieCard"
const Favorite = () => {
    const { favorites } = useMovieContext()
    if (favorites) {
        return (
            <div className="container-fluid">
                <h2 className="text-white fw-bolder">Your Favourite Movies.</h2>
                <div className="row  mt-3 m-0">
                    {favorites.map((movie) => (<MovieCard props={movie} key={movie.id} />)

                    )}

                </div>
            </div>

        )
    }

    return (
        <div className="favorite-section">
            <div className="content">
                <h3 className="text-danger">No favorite movie yet</h3>
                <p className="text-white">Start adding movie to this page</p>
            </div>
        </div>
    )
}

export default Favorite