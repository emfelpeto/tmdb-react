import { useState, useEffect } from 'react'
import './App.css'
import { MoviesGrid } from './components/MoviesGrid'

function App() {
    const [movies, setMovies] = useState([]);
    const apiUrl = import.meta.env.VITE_API_URL;
    const apiKey = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        fetch(`${apiUrl}?api_key=${apiKey}`)
        .then(response => response.json())
        .then(response => setMovies(response.results))
        .catch(err => console.error(err));
      }, [movies])

    return (
        <>
            <header>
                <h1>TMDB by Ernesto Melian</h1>
            </header>
            <main>
                <MoviesGrid movies={movies} />
            </main>
        </>
    )
}

export default App
