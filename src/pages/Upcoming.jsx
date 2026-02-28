import MovieCard from "../components/MovieCard"
import {useEffect, useState} from "react"
import "../css/Home.css"
import { getUpcomingMovies } from "../services/api"
import {useNavigate} from "react-router-dom";

function Home() {

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const loadUpcomingMovies = async () => {
            try {
                const upcomingMovies = await getUpcomingMovies()
                setMovies(upcomingMovies)
            } catch (error) {
                console.error("Error fetching upcoming movies:", error)
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
        loadUpcomingMovies()
    }, [])

    const navigate = useNavigate()
    const handleMovieClick = (movieId) => {
        navigate(`/details/${movieId}`)
        console.log(movieId)
    }

    return <div className="home">

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