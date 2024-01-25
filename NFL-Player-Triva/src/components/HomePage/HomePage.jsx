import React from 'react';
import styles from './HomePage.module.css';
import { getImageUrl } from '../../utils';
import { Link } from "react-router-dom";

export const HomePage = () => {
    return (
        <section className={styles.container}>
            <img
                src={getImageUrl('home/title.png')}
                alt="NFL Player Trivia Game Title"
                className={styles.titleImg}
            />
            <img
                src={getImageUrl('home/default_category.png')}
                alt="NFL Player Display"
                className={styles.displayImg}
            />
            <Link to="/game" className={styles.playBtn}>Play Now</Link>
            <footer id="copyright" className={styles.footer}>
                <p>© 2024 NFL Enterprises LLC. NFL and the NFL shield design are registered trademarks of the National Football League. The team names, logos and uniform designs are registered trademarks of the teams indicated. All other NFL-related trademarks are trademarks of the National Football League. NFL footage © NFL Productions LLC.</p>
            </footer>
        </section >

    );
};
export default HomePage;