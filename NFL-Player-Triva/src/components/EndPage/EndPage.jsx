import React from 'react';
import styles from './EndPage.module.css';
import { getImageUrl } from '../../utils';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

export const EndPage = () => {
    const location = useLocation();
    const score = location.state ? location.state.score : null;
    return (
        <section className={styles.container}>
            <img
                src={getImageUrl('end/nfl_logo.png')}
                alt="NFL Logo"
                className={styles.logoImg}
            />
            
            <h1>Your Score: {score}</h1>
            <h1>Thank you for playing NFL Player Trivia</h1>
            <Link to="/" className={styles.playAgainBtn}>Play Again</Link>

            <img
                src={getImageUrl('end/end_bg1.png')}
                alt="NFL Logo"
                className={styles.topLeftBgImg}
            />
            <img
                src={getImageUrl('end/end_bg2.png')}
                alt="NFL Logo"
                className={styles.bottomRightBgImg}
            />
        </section>
    )
}

export default EndPage;