import { useContext } from "react";

import GameContext from "../context/GameContext";

const ActionsButton = () => {
    const { started, ended, resetGame } = useContext(GameContext);

    return (
        <button
            onClick={resetGame}
            className="py-2 w-48 bg-gray-900 hover:bg-slate-900 rounded font-bold text-lg select-none transition-colors duration-200"
        >
            {started || ended ? "New Game" : "Shuffle"}
        </button>
    );
};

export default ActionsButton;
