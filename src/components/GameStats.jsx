import { useContext } from "react";

import GameContext from "../context/GameContext";

const GameStats = () => {
    const { started, flips, ended, consumedTime } = useContext(GameContext);

    return (
        <div className="font-bold text-center">
            <p className={`transition-opacity duration-500 ${!started && "opacity-0"}`}>
                Flips: {flips}
            </p>

            <p className={`transition-opacity duration-500 ${!ended && "opacity-0"}`}>
                Consumed Time: {consumedTime}s
            </p>
        </div>
    );
};

export default GameStats;
