import React, { useState, useEffect } from 'react';
import styles from './GamePage.module.css';
import { getImageUrl, getTeamLogoImage, getPlayerImage } from '../../utils';
import { Link, useNavigate } from "react-router-dom";

const questionsData = [
    {
        id: 1,
        question: 'Which of the following has more passing yards?',
        options: [
            { id: 1, name: "Tua Tagovailoa", team: "dolphins", position: "Quarterback", pass_yrds: 4624, isCorrect: true },
            { id: 2, name: "Jared Goff", team: "lions", position: "Quarterback", pass_yrds: 4575, isCorrect: false }
        ]
    },
    {
        id: 2,
        question: 'Which of the following has more passing yards?',
        options: [
            { id: 1, name: "Josh Allen", team: "bills", position: "Quarterback", pass_yrds: 4306, isCorrect: true },
            { id: 2, name: "Derek Carr", team: "saints", position: "Quarterback", pass_yrds: 3878, isCorrect: false }
        ]
    },
    {
        id: 3,
        question: 'Which of the following has more passing yards?',
        options: [
            { id: 1, name: "Jimmy Garoppolo", team: "raiders", position: "Quarterback", pass_yrds: 1205, isCorrect: false },
            { id: 2, name: "Lamar Jackson", team: "ravens", position: "Quarterback", pass_yrds: 3678, isCorrect: true }
        ]
    },
    {
        id: 4,
        question: 'Which of the following has more passing yards?',
        options: [
            { id: 1, name: "CJ Stroud", team: "texans", position: "Quarterback", pass_yrds: 4108, isCorrect: true },
            { id: 2, name: "Jalen Hurts", team: "eagles", position: "Quarterback", pass_yrds: 3858, isCorrect: false }
        ]
    },
    {
        id: 5,
        question: 'Which of the following has more passing yards?',
        options: [
            { id: 1, name: "Russell Wilson", team: "broncos", position: "Quarterback", pass_yrds: 3070, isCorrect: false },
            { id: 2, name: "Matthew Stafford", team: "rams", position: "Quarterback", pass_yrds: 3965, isCorrect: true }
        ]
    }
];

export const GamePage = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const navigate = useNavigate();

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
        // return options.sort(() => Math.floor(Math.random() * questionsData.length));

        return options;
    };

    const currentQuestion = questionsData[currentQuestionIndex];

    return (
        <section className={styles.mainContainer}>
            <nav id="navbar" className={styles.nav}>
                <Link to="/">
                    <img src={getImageUrl('game/home_icon.png')} alt="Home Icon" className={styles.homeImg} />
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
                            src={getTeamLogoImage(option.team)}
                            alt="Team Logo Image"
                            className={styles.teamLogoImg}
                        />
                        <img
                            src={getPlayerImage(option.name)}
                            alt="Player Image"
                            className={option.id % 2 ? styles.leftPlayerImg : styles.rightPlayerImg}
                        />
                        <h1>{option.name}</h1>
                    </div>
                ))}
                <div className={styles.orIcon}> OR </div>
            </div>
        </section>
    );
};

export default GamePage;