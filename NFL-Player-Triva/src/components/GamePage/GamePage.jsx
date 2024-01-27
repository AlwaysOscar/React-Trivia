import React, { useState, useEffect } from 'react';
import styles from './GamePage.module.css';
import { getImageUrl } from '../../utils';
import { Link, useNavigate, useLocation } from "react-router-dom";

const questionsData = [
    {
        id: 1,
        question: "Which of the following has more passing yards?",
        options: [
            { id: 1, text: "Jimmy Garoppolo", isCorrect: false, teamLogo: getImageUrl('game/raiders_logo.png'), playerImage: getImageUrl('game/Jimmy_Garoppolo.png') },
            { id: 2, text: "Matthew Stafford", isCorrect: true, teamLogo: getImageUrl('game/rams_logo.png'), playerImage: getImageUrl('game/Matthew_Stafford.png') },
        ],
    },
    {
        id: 2,
        question: "Which of the following has more receiving yards?",
        options: [
            { id: 3, text: "Tyreek Hill", isCorrect: false, teamLogo: getImageUrl('game/dolphins_logo.png'), playerImage: getImageUrl('game/Tyreek_Hill.png') },
            { id: 4, text: "CeeDee Lamb", isCorrect: true, teamLogo: getImageUrl('game/cowboys_logo.png'), playerImage: getImageUrl('game/CeeDee_Lamb.png') },
        ],
    },
    {
        id: 3,
        question: "Which of the following has more force fumbles?",
        options: [
            { id: 4, text: "Myles Garrett", isCorrect: true, teamLogo: getImageUrl('game/browns_logo.png'), playerImage: getImageUrl('game/Myles_Garrett.png') },
            { id: 5, text: "Alohi Gilman", isCorrect: false, teamLogo: getImageUrl('game/chargers_logo.png'), playerImage: getImageUrl('game/Alohi_Gilman.png') },
        ],
    },
];

export const GamePage = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const selectedCategory = location.state ? location.state.selectedCategory : null;

    useEffect(() => {
        // Reset state when moving to a new question
        setShowResult(false);
        setSelectedOption(null);
    }, [currentQuestionIndex]);

    const handleOptionClick = (option) => {
        if (showResult) {
            navigateToNextQuestion();
        } else {
            if (option.isCorrect) {
                setScore((prevScore) => prevScore + 1);
            }
            // Display result and update state
            setShowResult(true);
            setSelectedOption(option);
        }
    };

    const navigateToNextQuestion = () => {
        if (currentQuestionIndex < questionsData.length - 1) {
            // Move to the next question
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        } else {
            // End of the game, navigate to the EndPage and pass the score as a prop
            navigate('/end', { state: { score } });
        }
    };

    const shuffleOptions = (options) => {
        // Math.random give a number between 0 and 1 including decimals
        // * questionsData.length gives you a value between 0 and n
        // Math.floor is used to drop the decimal values
        return options.sort(() => Math.floor(Math.random() * questionsData.length));
    };

    const currentQuestion = questionsData[currentQuestionIndex];

    return (
        <section className={styles.mainContainer}>
            <nav id="navbar" className={styles.nav }>
                <Link to="/">
                    <img src={getImageUrl('game/home_icon.png')} alt="Home Icon" className={styles.homeImg}/>
                </Link>

                <img src={getImageUrl('game/nfl_logo.png')} alt="NFL Logo" className={styles.logoImg} />
                <div className={styles.scoreBoard}>
                    <h1>{currentQuestionIndex + 1} / {questionsData.length}</h1>
                </div>
            </nav >

            <h1>Question #{currentQuestionIndex + 1}</h1>
            <p>{currentQuestion.question}</p>

            <div className={styles.body}>
                {shuffleOptions(currentQuestion.options).map((option) => (
                    <div
                        key={option.id}
                        className={`${styles.choice} 
                        ${showResult && option.isCorrect ? styles.correct : ''} 
                        ${showResult && selectedOption && !option.isCorrect && option === selectedOption ? styles.wrong : ''}`
                        } onClick={() => handleOptionClick(option)}
                    >
                        <img
                            src={option.teamLogo}
                            alt="Team Logo Image"
                            className={styles.teamLogoImg}
                        />
                        <img
                            src={option.playerImage}
                            alt="Player Image"
                            className={option.id % 2 ? styles.leftPlayerImg : styles.rightPlayerImg}
                        />
                        <h1>{option.text}</h1>
                    </div>
                ))}
                <div className={styles.orIcon}> OR </div>
            </div>
        </section>
    );
};

export default GamePage;