import { useReducer } from "react";

import GameContext from "./GameContext";
import GameReducer from "./GameReducer";

import initialState from "./initialState";

import {} from "./types";

import { shuffle } from "../utils";

const GameState = props => {
    const [state, dispatch] = useReducer(GameReducer, initialState);

    return (
        <GameContext.Provider
            value={{
                ...state,
            }}
        >
            {props.children}
        </GameContext.Provider>
    );
};

export default GameState;
