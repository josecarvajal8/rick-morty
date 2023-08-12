/* eslint-disable prettier/prettier */
import { ActionsTypes } from './actions';
const mappedActions: { [key: string]: any } = {
    [ActionsTypes.ADD_BUSTED_LIST]: (state: any, payload: any) => {
        const current: any[] = state.busted_list;
        const validation = Boolean(current.find((el) => el.id === payload?.id));
        if (validation) {
            return state;
        }
        current.push(payload);
        return { ...state, busted_list: current };
    },
    [ActionsTypes.REMOVE_BUSTED_LIST]: (state: any, payload: any) => {
        const filterList = (state.busted_list as any[]).filter((el) => el.id !== payload.id);
        return { ...state, busted_list: filterList };
    },
    ['default']: (state: any) => {
        return state;
    }
};
export const reducer = (state: any, action: any) => {
    return mappedActions[action.type] ? mappedActions[action.type](state, action.payload) : mappedActions.default(state);
};
