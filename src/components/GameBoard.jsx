import { useState } from "react";
import Card from "./Card";

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

export default function GameBoard() {

    // Store the list of local images
  const images = [azpilicueta, cahill, cech, cole, drogba, gullit, hazard, ivanovic, jose, lampard, ramires, terry];

  const [shuffledImages, setShuffledImages] = useState(images);

  // Shuffle images function
  const shuffleImages = (imagesArray) => {
    let shuffled = [...imagesArray];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setShuffledImages(shuffled);
  };

  // Handle card click event to reshuffle
  const handleCardClick = () => {
    shuffleImages(images);
  };

    return (
        <div className="game-board">
        {shuffledImages.map((imgUrl, index) => (
        <Card key={index} imgUrl={imgUrl} onClick={handleCardClick} />
      ))}
    </div>
    )
}