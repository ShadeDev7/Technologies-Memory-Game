import { useReducer, useEffect } from "react";

import GameContext from "./GameContext";
import GameReducer from "./GameReducer";

import initialState from "./initialState";

import {
    SET_SCORE,
    SET_HIGHSCORE,
    RESET_GAME,
    SHUFFLE_CARDS,
    SET_FLIPPED_CARDS,
    SET_GAME_STARTED,
    SET_CAN_FLIP,
    UPDATE_MATCHED_CARDS,
    RESET_FLIPPED_CARDS,
} from "./types";

import { shuffle } from "../utils";

const GameState = props => {
    const [state, dispatch] = useReducer(GameReducer, initialState);

    const setScore = newValue => {
        dispatch({
            type: SET_SCORE,
            payload: newValue,
        });
    };

    const setHighscore = newValue => {
        dispatch({
            type: SET_HIGHSCORE,
            payload: newValue,
        });
    };

    const resetGame = () => {
        dispatch({
            type: RESET_GAME,
            payload: {
                started: false,
                ended: false,
                canFlip: true,
                shuffledCards: shuffle(state.cards),
                flippedCards: [],
                matchedCards: [],
            },
        });
    };

    const shuffleCards = () => {
        dispatch({
            type: SHUFFLE_CARDS,
            payload: shuffle(state.cards),
        });
    };

    const flipCard = card => {
        const stateFlippedCards = [...state.flippedCards];

        let flippedCards = [];

        if (stateFlippedCards.length <= 0 || stateFlippedCards.length >= 2) {
            flippedCards = [card];
        } else {
            if (stateFlippedCards[0].id === card.id) return;

            flippedCards = [...stateFlippedCards, card];
        }

        dispatch({
            type: SET_FLIPPED_CARDS,
            payload: flippedCards,
        });
    };

    const setGameStarted = () => {
        dispatch({
            type: SET_GAME_STARTED,
            payload: true,
        });
    };

    const setCanFlip = newValue => {
        dispatch({
            type: SET_CAN_FLIP,
            payload: newValue,
        });
    };

    const updateMatchedCards = () => {
        dispatch({
            type: UPDATE_MATCHED_CARDS,
            payload: [...state.matchedCards, ...state.flippedCards],
        });
    };

    const resetFlippedCards = () => {
        dispatch({
            type: RESET_FLIPPED_CARDS,
            payload: [],
        });
    };

    // Resets the score when the game starts.
    useEffect(() => {
        if (state.started) {
            setScore(0);
        }
    }, [state.started]);

    // Gets the highest score from local storage on the first mount and assigns it to the context.
    useEffect(() => {
        const lsHighscore = Number(localStorage.getItem("highscore") ?? 0);

        if (lsHighscore > 0) {
            setHighscore(lsHighscore);
        }
    }, []);

    // Saves the highscore in local storage when it changes.
    useEffect(() => {
        const lsHighscore = Number(localStorage.getItem("highscore") ?? 0);

        localStorage.setItem(
            "highscore",
            (state.highscore > lsHighscore || isNaN(lsHighscore)
                ? state.highscore
                : lsHighscore
            ).toString()
        );
    }, [state.highscore]);

    /*
        Starts the game when the first card is flipped.
        Also, checks if there's two flipped cards and if they match.
    */
    useEffect(() => {
        const stateFlippedCards = [...state.flippedCards];

        if (stateFlippedCards.length > 0 && !state.started) {
            return setGameStarted();
        }

        if (stateFlippedCards.length != 2) return;

        setCanFlip(false);

        if (stateFlippedCards[0].value === stateFlippedCards[1].value) {
            updateMatchedCards();
            setCanFlip(true);
        } else {
            setTimeout(() => {
                resetFlippedCards();
                setCanFlip(true);
            }, 1350);
        }
    }, [state.flippedCards]);

    return (
        <GameContext.Provider
            value={{
                ...state,
                setHighscore,
                resetGame,
                shuffleCards,
                flipCard,
            }}
        >
            {props.children}
        </GameContext.Provider>
    );
};

export default GameState;
