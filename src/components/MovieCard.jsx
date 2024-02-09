import styles from "../styles/MovieCard.module.css";
import React, { useState } from 'react';

export function MovieCard({ img, name }) {
    const moviePath = `https://image.tmdb.org/t/p/w500/${img}`;
    const [isLoading, setIsLoading] = useState(true);
    const handleImageLoad = () => {
        setIsLoading(false);
    };
    return (
        <li className={[styles.movieCard,isLoading ? styles.loading : ''].join(" ").trim()}>
            <img 
                className={styles.movieImage} 
                src={moviePath} 
                alt={`Poster of the movie ${name}`} 
                width="230" 
                height={345}
                onLoad={handleImageLoad} />
            <h3 className={styles.movieTitle}>{name}</h3>
        </li>
    )
}