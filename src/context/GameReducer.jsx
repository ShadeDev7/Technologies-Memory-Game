import {} from "./types";

import initialState from "./initialState";

export default (state, action) => {
    const { payload, type } = action;

    switch (type) {
        default:
            return state;
    }
};
