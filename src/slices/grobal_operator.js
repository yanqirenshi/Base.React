import { createSlice } from '@reduxjs/toolkit';

import maneger from '../manegers/GlobalOperator.js';

export const grobal_operator = createSlice({
    name: 'sogh',
    initialState: maneger.makeState(),
    reducers: {
        changedRect: (state, action)=> {
            const w = action.payload.w;
            const h = action.payload.h;

            maneger.changePositionRoots(w, h, state);
        },
        clickRoot: (state, action)=> {
            maneger.switchOpenedOperator(action.payload, state);
        },
    }
});

export const {
    changedRect, clickRoot,
} = grobal_operator.actions;

export default grobal_operator.reducer;
