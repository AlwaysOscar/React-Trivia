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

            <h1>Question #1</h1>
            <p>Text text text text text text text text text text text text text text text text text text text</p>

            <div className={styles.body}>
                <div className={styles.choice}>
                    <img
                        src={getImageUrl('game/raiders_logo.png')}
                        alt="Team Logo Image"
                        className={styles.teamLogoImg}
                    />
                    <img
                        src={getImageUrl('game/Jimmy_Garoppolo.png')}
                        alt="Player Image"
                        className={styles.leftPlayerImg}
                    />
                    <h1>Jimmy Garoppolo</h1>
                </div>

                <div className={styles.orIcon}> OR </div>

                <div className={styles.choice}>
                    <img
                        src={getImageUrl('game/rams_logo.png')}
                        alt="Team Logo Image"
                        className={styles.teamLogoImg}
                    />
                    <img
                        src={getImageUrl('game/Matthew_Stafford.png')}
                        alt="Player Image"
                        className={styles.rightPlayerImg}
                    />
                    <h1>Matthew Stafford</h1>
                </div>
            </div>
        </section>
    );
};

export default GamePage;