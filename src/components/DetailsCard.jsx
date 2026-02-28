import "../css/DetailsCard.css"

function DetailsCard({details}) {
    if (!details || !details.poster_path) {
        return <div>Loading movie details...</div>
    }

    return <div className="details-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500/${details.poster_path} `} alt={details.title} />

        </div>
        <div className="details-overlay">
            <div className="details-info">
                <h2>{details.title}</h2>
                <h3>Releasedate<p>{details.release_date}</p></h3>

                <h3>About <p>{details.overview}</p></h3>

                <h3>Ratings <p>{details.vote_average}/10 ({details.vote_count} votes)</p></h3>

                <h3>Budget<p>Budget: ${details.budget?.toLocaleString()}</p></h3>

                <h3>Runtime<p>{details.runtime} minutes</p></h3>

                <h3>IMDB ID<p> {details.imdb_id}</p></h3>
            </div>

        </div>
    </div>
}

export default DetailsCard