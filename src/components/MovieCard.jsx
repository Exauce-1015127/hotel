
function MovieCard({movie}) {

    function handleFavoriteClick() {
        console.log("Favorite clicked")
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.url} alt={movie.title} />
            <div className="movie-overlay">
                <button className="favorite-btn" onClick={handleFavoriteClick}>🩶</button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
        </div>
    </div>
}

export default MovieCard