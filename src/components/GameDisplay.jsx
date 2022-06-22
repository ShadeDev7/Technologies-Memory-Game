import { useContext, useEffect } from "react";

import GameContext from "../context/GameContext";

import Card from "./Card";

const GameDisplay = () => {
    const { shuffledCards, shuffleCards, flippedCards, matchedCards } = useContext(GameContext);

    useEffect(() => {
        shuffleCards();
    }, []);

    return (
        <div
            className="
                p-4
                sm:py-8
                md:px-8
                w-full
                bg-gray-900
                rounded
                grid
                grid-cols-4
                md:grid-cols-5
                landscape:grid-cols-5
                justify-items-center
                gap-4
                md:gap-8
            "
        >
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
