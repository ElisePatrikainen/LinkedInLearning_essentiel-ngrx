import { itemSelected } from './selected-items.actions';
const initialState = 0;

// pseudo code
export const selectedItemsReducer = (state = initialState, action) => {
    if (typeof action === itemSelected) {
        return state + 1;
    }
    return state;
};
