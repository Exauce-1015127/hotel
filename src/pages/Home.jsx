import MovieCard from "../components/MovieCard"
import {useEffect, useState} from "react"
import "../css/Home.css"
import { getPopularMovies, searchMovies } from "../services/api"
import {useNavigate} from "react-router-dom";

function Home() {

    const [searchQuery, setSearchQuery] = useState("")
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (error) {
                console.error("Error fetching popular movies:", error)
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
        loadPopularMovies()
    }, [])

    const handleSearch = async (e) => {
        e.preventDefault()
        if (!searchQuery.trim()) return
        if (loading) return

        setLoading(true)
        try{
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        } catch (error) {
            console.error("Error searching movies:", error)
            setError(error.message)
        } finally {
            setLoading(false)
        }
    };

    const navigate = useNavigate()
    const handleMovieClick = (movieId) => {
        navigate(`/details/${movieId}`)
        console.log(movieId)
    }

    return <div className="home">

        <form onSubmit={handleSearch} className="search-form">
            <input
                type="text"
                className="search-input"
                placeholder="Zoek een film..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">Zoeken</button>
        </form>

        {error && <div className="error-message">{error}</div>}
        {loading ? (<div>Loading...</div>) : (
            <div className="movie-grid">
                {movies.map(movie => (
                        <MovieCard onClick={() => handleMovieClick(movie.id)} key={movie.id} movie={movie} />
                ))}
            </div>
        )}
    </div>
}

export default Home