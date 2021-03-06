import { useContext } from "react";

import GameContext from "../context/GameContext";

const ScoreDisplay = () => {
    const { score, highscore } = useContext(GameContext);

    return (
        <div className="font-bold text-center">
            <h1 className="text-5xl italic">
                Score: <span className="not-italic">{score}</span>
            </h1>

            <h2>Highscore: {highscore}</h2>
        </div>
    );
};

export default ScoreDisplay;
