import React, { createContext, useContext, useReducer } from "react";
import * as Types from "./constants";

const initialState = {
    step: 1,
    data: {},
};

export const StateContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case Types.SET_STEP:
            return {
                ...state,
                step: action.step,
            };
        default:
            return state;
    }
};

export const StateProvider = ({ children }) => <StateContext.Provider value={useReducer(reducer, initialState)}>{children}</StateContext.Provider>;

export const useStateValue = () => useContext(StateContext);
