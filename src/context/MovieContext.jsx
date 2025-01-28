import { createContext, useContext, useState, useEffect } from "react"

const MovieContext = createContext()
export const useMovieContext = useContext(MovieContext)


export const MovieProvider = ({children}) => {
    const [favorites, setFavorite] = useState([])

    useEffect(() => {
        const savedFavorite = localStorage.getItem("favorite")
        if(savedFavorite) setFavorite(JSON.parse(savedFavorite))
    }, [])

    useEffect(() => {
        localStorage.setItem("favorite", JSON.stringify(favorites))
    }, [])

    const addFavorite = (movie) => {
        setFavorite(prev => [...prev, movie])
    }

    const removeFavorite = (movieId) => {
        setFavorite(prev => prev.filter(prev.id === movieId))
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    const value = {
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite
    }



    return (
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    )
}
