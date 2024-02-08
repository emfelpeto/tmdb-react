import styles from "../styles/MovieCard.module.css";

export function MovieCard({ img, name }) {
    const moviePath = `https://image.tmdb.org/t/p/w500/${img}`
    return (
        <li className={styles.movieCard}>
            <img className={styles.movieImage} src={moviePath} alt={`Poster of the movie ${name}`} width="230" height={345} />
            <h3 className={styles.movieTitle}>{name}</h3>
        </li>
    )
}