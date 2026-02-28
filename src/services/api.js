const API_KEY = "b4951843de16be58cd109170b32e80d3"
const API_BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
    const response = await fetch(`${API_BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data = await response.json()
    return data.results
};

export const searchMovies = async (query) => {
    const response = await fetch(`${API_BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
    const data = await response.json()
    return data.results
};

export const getUpcomingMovies = async () => {
    const response = await fetch(`${API_BASE_URL}/movie/upcoming?api_key=${API_KEY}`)
    const data = await response.json()
    return data.results
};

export const getMovieDetails = async (movieId) => {
    const response = await fetch(`${API_BASE_URL}/movie/${movieId}?api_key=${API_KEY}`)
    const data = await response.json()
    return data
};
