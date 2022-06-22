import {
    INITIALIZE_GAME,
    START_GAME,
    RESET_GAME,
    END_GAME,
    SET_FLIPPED_CARDS,
    SET_CAN_FLIP,
    SET_MATCHED_CARDS,
} from "./types";

import initialState from "./initialState";

export default (state, action) => {
    const { payload, type } = action;

    switch (type) {
        case INITIALIZE_GAME:
            return {
                ...state,
                ...payload,
            };

        case START_GAME:
            return {
                ...state,
                ...payload,
            };

        case RESET_GAME:
            return {
                ...initialState,
                ...payload,
            };

        case END_GAME:
            return {
                ...state,
                ...payload,
            };

        case SET_FLIPPED_CARDS:
            return {
                ...state,
                ...payload,
            };

        case SET_CAN_FLIP:
            return {
                ...state,
                ...payload,
            };

        case SET_MATCHED_CARDS:
            return {
                ...state,
                ...payload,
            };

        default:
            return state;
    }
};
