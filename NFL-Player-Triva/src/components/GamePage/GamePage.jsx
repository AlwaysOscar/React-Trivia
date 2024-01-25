import React from 'react';
import styles from './GamePage.module.css';
import { getImageUrl } from '../../utils';
import { Link } from "react-router-dom";

export const GamePage = () => {
    return (
        <section className={styles.mainContainer}>
            <navbar id="navbar" className={styles.navbar}>
                <img
                    src={getImageUrl('game/home_icon.png')}
                    alt="Home Icon"
                    className={styles.homeImg}
                />
                <img
                    src={getImageUrl('game/nfl_logo.png')}
                    alt="NFL Logo"
                    className={styles.logoImg}
                />
                <div className={styles.scoreBoard}>
                    <h1>
                        1 / 10
                    </h1>
                </div>
            </navbar>

            <footer id="footer" className={styles.footer}>
                <img
                    src={getImageUrl('game/left_arrow.png')}
                    alt="Home Icon"
                    className={styles.arrowImg}
                />
                <img
                    src={getImageUrl('game/right_arrow.png')}
                    alt="Home Icon"
                    className={styles.arrowImg}
                />
            </footer>

        </section>
    );
};

export default GamePage;