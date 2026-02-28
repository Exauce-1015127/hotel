import "../css/MovieCard.css"
import {useMovieContext} from "../contexts/MovieContext.jsx";
import {useNavigate} from "react-router-dom";


function MovieCard({movie}) {

    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()
    const isFav = isFavorite(movie.id)

    function handleFavoriteClick(e) {
        e.preventDefault()
        if (isFav) {
            removeFromFavorites(movie.id)
            alert("Movie removed from favorites")
        } else {
            addToFavorites(movie)
            alert("Movie added to favorites")
        }
    }

    const navigate = useNavigate()
    function handleMovieClick(movieId) {
        navigate(`/details/${movieId}`)
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path} `} alt={movie.title} />
            <div className="movie-overlay">
                <button className={`favorite-btn ${isFav ? "active" : ""}`} onClick={handleFavoriteClick}>🩶</button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>
        <div className="button-section">
            <button onClick={() => handleMovieClick(movie.id)} className="details-btn">More information</button>
        </div>
    </div>
}

export default MovieCard