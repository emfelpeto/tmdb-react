import { useState, useEffect } from 'react'
import './App.css'
import { MoviesGrid } from './components/MoviesGrid'

function App() {
    const [movies, setMovies] = useState([]);
    // const apiUrl = import.meta.env.VITE_API_URL;
    // const apiKey = import.meta.env.VITE_API_KEY;
    const VITE_API_URL='https://api.themoviedb.org/3/trending/movie/day'
    const VITE_API_KEY='a4e8b99c61e88786d77483b08987cf82'

    useEffect(() => {
        fetch(`${VITE_API_URL}?api_key=${VITE_API_KEY}`)
        .then(response => response.json())
        .then(response => setMovies(response.results))
        .catch(err => console.error(err));
      }, [movies])

    return (
        <>
            <header>
                <h1>Trending movies</h1>
            </header>
            <main>
                <MoviesGrid movies={movies} />
            </main>
        </>
    )
}

export default App
