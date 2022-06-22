import { useContext } from "react";

import GameContext from "../context/GameContext";

import Card from "./Card";

const GameDisplay = () => {
    const { shuffledCards, flippedCards, matchedCards } = useContext(GameContext);

    return (
        <div className="py-4 md:py-8 w-full bg-gray-900 rounded-lg grid grid-cols-4 md:grid-cols-5 landscape:grid-cols-5 justify-items-center gap-y-4 md:gap-y-6">
            {shuffledCards.map(({ id, value }) => (
                <Card
                    key={id}
                    id={id}
                    value={value}
                    isFlipped={
                        flippedCards.some(card => card.id === id) ||
                        matchedCards.some(card => card.id === id)
                    }
                />
            ))}
        </div>
    );
};

export default GameDisplay;
