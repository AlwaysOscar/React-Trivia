import React, { useState } from 'react';
import styles from './HomePage.module.css';
import { getImageUrl } from '../../utils';
import { Link } from "react-router-dom";

export const HomePage = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const canProceed = selectedCategory !== null;

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

            <select
                value={selectedCategory || ''}
                onChange={handleCategoryChange}
                className={styles.categoryDropdown}
            >
                <option value="" disabled>Select category</option>
                <option value="mixed">Mixed</option>
            </select>

            <Link
                to={canProceed ? { pathname: '/game', state: { selectedCategory } } : "#"}
                className={`${styles.playBtn} ${canProceed ? '' : styles.disabled}`}
            >
                Play Now
            </Link>

            <footer id="copyright" className={styles.footer}>
                <p>© 2024 NFL Enterprises LLC. NFL and the NFL shield design are registered trademarks of the National Football League. The team names, logos and uniform designs are registered trademarks of the teams indicated. All other NFL-related trademarks are trademarks of the National Football League. NFL footage © NFL Productions LLC.</p>
            </footer>
        </section>
    );
};

export default HomePage;