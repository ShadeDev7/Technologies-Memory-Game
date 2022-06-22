import { useReducer, useEffect } from "react";

import GameContext from "./GameContext";
import GameReducer from "./GameReducer";

import initialState from "./initialState";

import {
    INITIALIZE_GAME,
    START_GAME,
    RESET_GAME,
    END_GAME,
    SET_FLIPPED_CARDS,
    SET_CAN_FLIP,
    SET_MATCHED_CARDS,
} from "./types";

import { shuffle } from "../utils";

const GameState = props => {
    const [state, dispatch] = useReducer(GameReducer, initialState);

    const initializeGame = () => {
        const localStorageHighscore = Number(localStorage.getItem("highscore") ?? 0);

        dispatch({
            type: INITIALIZE_GAME,
            payload: {
                ...(localStorageHighscore > state.highscore && {
                    highscore: localStorageHighscore,
                }),
                shuffledCards: shuffle(state.cards),
            },
        });
    };

    const startGame = () => {
        dispatch({
            type: START_GAME,
            payload: {
                score: 0,
                startTime: new Date().getTime(),
            },
        });
    };

    const resetGame = () => {
        dispatch({
            type: RESET_GAME,
            payload: {
                highscore: state.highscore,
                shuffledCards: shuffle(state.cards),
            },
        });
    };

    const endGame = () => {
        const basePoints = import.meta.env.VITE_BASE_POINTS;
        const consumedTime =
            Math.round(((new Date().getTime() - state.startTime) / 1000) * 100) / 100;

        const score = Math.round(
            basePoints * state.cards.length +
                (basePoints * 100) / state.flips +
                (basePoints * 1000) / consumedTime
        );

        dispatch({
            type: END_GAME,
            payload: {
                consumedTime,
                score,
                ...(score > state.highscore && { highscore: score }),
            },
        });
    };

    const flipCard = card => {
        const flippedCardsLength = state.flippedCards.length;

        if (flippedCardsLength === 1 && state.flippedCards[0].id === card.id) return;

        const flippedCards =
            flippedCardsLength <= 0 || flippedCardsLength >= 2
                ? [card]
                : [...state.flippedCards, card];

        dispatch({
            type: SET_FLIPPED_CARDS,
            payload: {
                flippedCards,
                flips: state.flips + 1,
                ...(!state.started && { started: true }),
            },
        });
    };

    const setCanFlip = newValue => {
        dispatch({
            type: SET_CAN_FLIP,
            payload: {
                canFlip: newValue,
            },
        });
    };

    const updateMatchedCards = () => {
        const matchedCards = [...state.matchedCards, ...state.flippedCards];

        dispatch({
            type: SET_MATCHED_CARDS,
            payload: {
                matchedCards,
                ...(matchedCards.length === state.shuffledCards.length && { ended: true }),
            },
        });
    };

    const resetFlippedCards = () => {
        dispatch({
            type: SET_FLIPPED_CARDS,
            payload: {
                flippedCards: [],
            },
        });
    };

    // When the app is mounted, initializes the app.
    useEffect(() => {
        initializeGame();
    }, []);

    /**
     * When the started variable is changed to true by
     * the first card flip, starts the game.
     */
    useEffect(() => {
        if (!state.started) return;

        startGame();
    }, [state.started]);

    /**
     * When the ended variable is changed to true by
     * the matched cards length being equal to all
     * the shuffled cards, ends the game.
     */
    useEffect(() => {
        if (!state.ended) return;

        endGame();
    }, [state.ended]);

    /**
     * If there is two flipped cards, make the comparison
     * between the value of them and if they match: add them
     * to the matched cards, else: flip them back.
     */
    useEffect(() => {
        if (state.flippedCards.length != 2) return;

        setCanFlip(false);

        if (state.flippedCards[0].value === state.flippedCards[1].value) {
            updateMatchedCards();
            setCanFlip(true);
        } else {
            setTimeout(() => {
                resetFlippedCards();
                setCanFlip(true);
            }, 1350);
        }
    }, [state.flippedCards]);

    /**
     * When the highscore changes, replace the local
     * storage highscore if the state one is greater
     */
    useEffect(() => {
        if (!state.ended) return;

        const localStorageHighscore = Number(localStorage.getItem("highscore") ?? 0);

        if (isNaN(localStorageHighscore) || localStorageHighscore < state.highscore) {
            localStorage.setItem("highscore", state.highscore.toString());
        }
    }, [state.highscore]);

    return (
        <GameContext.Provider
            value={{
                ...state,
                resetGame,
                flipCard,
            }}
        >
            {props.children}
        </GameContext.Provider>
    );
};

export default GameState;
