import React from 'react';
import styles from './EndPage.module.css';
import { getImageUrl } from '../../utils';
import { Link } from "react-router-dom";

export const EndPage = () => {
    return (
        <>
            <section className={styles.container}>
                <img
                    src={getImageUrl('end/nfl_logo.png')}
                    alt="NFL Logo"
                    className={styles.logoImg}
                />
                <div className={styles.text}>
                    <h1>Your Score: 10/10</h1>
                </div>
                <div className={styles.text}>
                    <h1>Thank you for playing NFL Player Trivia</h1>
                </div>
                <Link to="/" className={styles.playAgainBtn}>Play Again</Link>
            </section>
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
        </>

    )
}

export default EndPage;