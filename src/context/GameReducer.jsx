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
        case START_GAME:
        case END_GAME:
        case SET_FLIPPED_CARDS:
        case SET_CAN_FLIP:
        case SET_MATCHED_CARDS:
            return {
                ...state,
                ...payload,
            };

        case RESET_GAME:
            return {
                ...initialState,
                ...payload,
            };

        default:
            return state;
    }
};
