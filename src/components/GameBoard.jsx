import { useContext } from "react";
import Card from "./Card";
import { GameContext } from "./Context";

export default function GameBoard() {

  // Handle card click event to reshuffle
  const gameCtx = useContext(GameContext);

    return (
        <div className="game-board">
        {gameCtx.shuffledImages.map((imgUrl, index) => (
        <Card key={index} imgUrl={imgUrl} onClick={() => gameCtx.handleCardClick(imgUrl)} />
      ))}
    </div>
    )
}