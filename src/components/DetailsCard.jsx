import "../css/DetailsCard.css"

function DetailsCard({details}) {
    if (!details || !details.poster_path) {
        return <div>Loading movie details...</div>
    }

    return <div className="details-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500/${details.poster_path} `} alt={details.title} />
        </div>
        <div className="details-info">
            <h3>{details.title}</h3>
            <p>{details.release_date}</p>
            <p>{details.overview}</p>
            <p>Rating: {details.vote_average}/10 ({details.vote_count} votes)</p>
            <p>Popularity: {details.popularity}</p>
            <p>Budget: ${details.budget?.toLocaleString()}</p>
            <p>Revenue: ${details.revenue?.toLocaleString()}</p>
            <p>Runtime: {details.runtime} minutes</p>
            <p>Movie ID: {details.id}</p>
            <p>IMDB ID: {details.imdb_id}</p>
        </div>
    </div>
}

export default DetailsCard