import { useContext, useState, useEffect } from "react";

import GameContext from "../context/GameContext";

const Card = ({ id, value, isFlipped }) => {
    const { started, canFlip, flipCard } = useContext(GameContext);

    const [shouldFlip, setShouldFlip] = useState(false);

    useEffect(() => {
        const card = document.getElementById(id);

        if (isFlipped) {
            card.classList.add("flip");

            setTimeout(() => {
                setShouldFlip(true);

                setTimeout(() => {
                    card.classList.remove("flip");
                }, 275);
            }, 400);
        } else {
            if (!started) return;

            card.classList.add("unflip");

            setTimeout(() => {
                card.classList.remove("unflip");
                setShouldFlip(false);
            }, 675);
        }
    }, [isFlipped]);

    return (
        <div
            id={id}
            className="p-2 w-16 h-16 bg-slate-800 rounded-md select-none transition-transform duration-500 hover:cursor-pointer"
            onClick={() => {
                canFlip && flipCard({ id, value });
            }}
        >
            {shouldFlip ? (
                <img src={`/imgs/${value}.svg`} alt={`Card Front (${value})`} />
            ) : (
                <img src="/imgs/card-back.svg" alt="Card Back (?)" />
            )}
        </div>
    );
};

export default Card;
