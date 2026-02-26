import MovieCard from "../components/MovieCard"
import { useState } from "react"
import "../css/Home.css"

function Home() {

    const [searchQuery, setSearchQuery] = useState("")

    const movies = [
        {id: 1, title: "Een leuke film", year: 2021, url: "https://iili.io/qfCJ3a1.jpg"},
        {id: 2, title: "Nog een leuke film", year: 2022, url: "https://iili.io/qfBmui7.png"},
        {id: 3, title: "Een hele andere film", year: 2024, url: "https://iili.io/qfBtIoP.jpg"},
    ]

    const handleSearch = (e) => {
        e.preventDefault()
        console.log("Zoeken geklikt");
        setSearchQuery("")
    };

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
        <h1>Home</h1>
        <div className="movie-grid">
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    </div>
}

export default Home