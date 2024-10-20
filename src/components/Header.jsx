import { useContext } from 'react';
import { GameContext } from './Context';

export default function Header() {
    const { score, highScore } = useContext(GameContext);

    return (
        <>
            <h1>Memory Card Game 🎴</h1>
            <h3>Score: {score}</h3>
            <h3>High Score: {highScore}</h3>
        </>
    );
}
