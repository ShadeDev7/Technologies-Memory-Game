import { cards } from "../data/cards";

const initialState = {
    score: 0,
    highscore: 0,
    started: false,
    startTime: 0,
    ended: false,
    consumedTime: 0,
    canFlip: true,
    flips: 0,
    cards,
    shuffledCards: [],
    flippedCards: [],
    matchedCards: [],
};

export default initialState;
