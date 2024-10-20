/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import azpilicueta from '../assets/azpilicueta.jpg';
import cahill from '../assets/cahill.jpg';
import cech from '../assets/cech.jpg';
import cole from '../assets/cole.jpg';
import drogba from '../assets/drogba.jpeg';
import gullit from '../assets/gullit.jpg';
import hazard from '../assets/hazard.jpg';
import ivanovic from '../assets/ivanovic.jpg';
import jose from '../assets/jose.jpg';
import lampard from '../assets/lampard.jpg';
import ramires from '../assets/ramires.jpg';
import terry from '../assets/terry.jpg';

import Modal from "./Modal";

const images = [azpilicueta, cahill, cech, cole, drogba, gullit, hazard, ivanovic, jose, lampard, ramires, terry];

export const GameContext = createContext({
    score: 0,
    highScore: 0,
    shuffledImages: images,
    handleCardClick: () => {}
});

export default function GameProvider({ children }) {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [clickedCards, setClickedCards] = useState([]);
    const [shuffledImages, setShuffledImages] = useState(images);
    const [showModal, setShowModal] = useState(false);

    // Shuffle images function
    const shuffleImages = (imagesArray) => {
        let shuffled = [...imagesArray];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    // Shuffle images at the beginning
    const initializeGame = () => {
        const shuffled = shuffleImages(images);
        setShuffledImages(shuffled);
    };

    // Use useEffect to initialize the game only once on mount
    useEffect(() => {
        initializeGame(); // Shuffles images when the component is mounted
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Empty dependency array ensures this runs only once

    const handleCardClick = (cardUrl) => {
        if (clickedCards.includes(cardUrl)) {
            // Show the modal with the current score
            setShowModal(true);
        } else {
            setClickedCards([...clickedCards, cardUrl]);
            setScore((prevScore) => prevScore + 1);

            const newShuffledImages = shuffleImages(shuffledImages);
            setShuffledImages(newShuffledImages);
        }
    };

    const resetGame = () => {
        if (score > highScore) {
            setHighScore(score);
        }
        setScore(0);
        setClickedCards([]);
        initializeGame();
        setShowModal(false)
    };

    return (
        <GameContext.Provider value={{ score, highScore, shuffledImages, handleCardClick }}>
            {children}
            {showModal && <Modal score={score} onClose={resetGame} />}
        </GameContext.Provider>
    );
}
