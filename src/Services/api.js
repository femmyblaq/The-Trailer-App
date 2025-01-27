const API_KEY = "890def4395334991001b0ef972fadc66"
const BASE_URL = "https://api.themoviedb.org/3"


export const getAllMovies = async () => {
   const response = await  fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}`)
    const data = await response.json()
   return data.results

}



export const searchMovies = async (query) => {
   const response = await  fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
    const data = await response.json()
   return data.results

}

