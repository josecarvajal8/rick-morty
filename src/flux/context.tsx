/* eslint-disable prettier/prettier */
import React, { FC, createContext, useContext, useReducer } from 'react';
import { reducer } from './reducer';
const initialState = { busted_list: [] };
const AppContext = createContext({});
export const AppProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const { state, dispatch } = useContext<any>(AppContext);
    return { state, dispatch };
};

