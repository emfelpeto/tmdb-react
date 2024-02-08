import styles from "../styles/MoviesGrid.module.css";
import { MovieCard } from "./MovieCard";

export function MoviesGrid({movies}) {
    return (
        <div className={styles.moviesGridContainer}>
            <ul className={styles.moviesGrid}>
                {movies.map(movie => (
                    <MovieCard
                        img={movie.poster_path}
                        name={movie.title}
                        key={movie.id}
                    />
                ))}
            </ul>
        </div>
    )
}