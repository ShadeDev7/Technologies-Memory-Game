import { cards } from "../data/cards";

const initialState = {
    score: 0,
    highscore: 0,
    started: false,
    ended: false,
    canFlip: true,
    cards,
    shuffledCards: [],
    flippedCards: [],
    matchedCards: [],
};

export default initialState;
