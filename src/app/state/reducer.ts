import { createReducer, on } from '@ngrx/store';
import { itemSelected } from './actions';

export interface AppState {
    count: number;
}

const initialState: AppState = {
    count: 0
};

const itemReducer = createReducer(
    initialState,
    on(itemSelected, (state) => ({count: state.count++}))
)

export function reducer(state: AppState, action) {
    return itemReducer(state, action);
}
