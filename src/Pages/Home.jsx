import "./Home.css"
import MovieCard from "../components/MovieCard";
import mv1 from "../assets/Images/theSquidGame.jpg"
import mv2 from "../assets/Images/movie2.jpg"
import mv3 from "../assets/Images/movie3.jpg"
import { useState } from "react";
import { getAllMovies } from "../Services/api";

const Home = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [movies, setMovies] = useState([])
    // const movies = [
    //     {
    //         id: 1,
    //         img: mv1,
    //         title: "The squid 2",
    //         description: "Hack people, take drugs, hack more people take more drugs",
    //         releaseDate: 2024
    //     },
    //     {
    //         id: 2,
    //         img: mv2,
    //         title: "The Robot",
    //         description: "Hack people, take drugs, hack more people take more drugs",
    //         releaseDate: 2023
    //     },
    //     {
    //         id: 3,
    //         img: mv3,
    //         title: "The Last of us",
    //         description: "The world ends people survive, plant turns people in zombie.",
    //         releaseDate: 2021
    //     },
    //     {
    //         id: 4,
    //         img: mv3,
    //         title: "Mufasa: The Lion King",
    //         description: "Father of Simba, Father of Simba, Father of Simba, Father of Simba, Father of Simba, Father of Simba, Father of Simba",
    //         releaseDate: 2024
    //     }

    // ]

    const loadedMovies = async () => {
        const allMovies = await getAllMovies()
        setMovies(allMovies)
    }
    

    loadedMovies()


    const searchHandler = (e) => {
        setSearchQuery(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        console.log(searchQuery)
    }
    // const movieTit = "Fola"
    // console.log("From Home:", movies)
    return (
        <>
            <div className="Heroes"></div>
            <div className="search d-flex justify-content-center align-items-center">
                <form onSubmit={submitHandler}  className="d-flex justify-content-center w-50">
                    <input
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        value={searchQuery}
                        onChange={searchHandler}
                    />
                    <button className="myBtn" type="submit"><i className="ri-search-line"></i></button>
                </form>
            </div>



            <div className="movie-grids container-fluid px-5 mt-5">
                <h1 className="fw-bolder text-light">Discover</h1>
                <div className="row  mt-3 m-0">
                    {movies.map((movie) =>  
                        movie.title.toLowerCase().toUpperCase().includes(searchQuery) && (<MovieCard props={movie} key={movie.id} /> )
                        
                    

    
                )}

                </div>
            </div>

        </>
    )
}


export default Home;