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

export default (state, action) => {
    const { payload, type } = action;

    switch (type) {
        case SET_SCORE:
            return {
                ...state,
                score: payload,
            };

        case SET_HIGHSCORE:
            return {
                ...state,
                highscore: payload,
            };

        case RESET_GAME:
            return {
                ...state,
                ...payload,
            };

        case SHUFFLE_CARDS:
            return {
                ...state,
                shuffledCards: payload,
            };

        case SET_FLIPPED_CARDS:
            return {
                ...state,
                flippedCards: payload,
            };

        case SET_GAME_STARTED:
            return {
                ...state,
                started: payload,
            };

        case SET_CAN_FLIP:
            return {
                ...state,
                canFlip: payload,
            };

        case UPDATE_MATCHED_CARDS:
            return {
                ...state,
                matchedCards: payload,
            };

        case RESET_FLIPPED_CARDS:
            return {
                ...state,
                flippedCards: payload,
            };

        default:
            return state;
    }
};
