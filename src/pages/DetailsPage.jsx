import DetailsCard from "../components/DetailsCard"
import {useEffect, useState} from "react"
import "../css/Details.css"
import { getMovieDetails } from "../services/api"
import { useParams } from "react-router-dom"

function MovieDetails() {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const { movieId } = useParams()
    const [movieDetails, setMovieDetails] = useState( {} )

    useEffect(() => {
        const loadMovieDetails = async () => {
            if (!movieId) return
            
            try {
                setLoading(true)
                const movieDetails = await getMovieDetails(movieId)
                setMovieDetails(movieDetails)
                console.log(movieDetails)
            } catch (error) {
                console.error("Error fetching popular movie details:", error)
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
        loadMovieDetails()
    }, [movieId])


    return (
        <div className="details-page">

        {error && <div className="error-message">{error}</div>}
        {loading ? (<div>Loading...</div>) : (
            <div className="movie-details">
                        <DetailsCard key={movieId} details={movieDetails} />
            </div>
        )}
    </div>
    )
}

export default MovieDetails