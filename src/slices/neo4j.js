import { createSlice } from '@reduxjs/toolkit';

import maneger from '../manegers/Neo4j.js';

export const neo4j = createSlice({
    name: 'neo4j',
    initialState: {
        state: null,
        check_state: { start: null, end: null },
    },
    reducers: {
        started_connect: (state, action) => {
            state.check_state.start = new Date().toISOString();
            state.check_state.end = null;
        },
        successed_connect: (state, action) => {
            state.state = 'CONNECTED';
            state.check_state.end = new Date().toISOString();
        },
        failed_connect: (state, action) => {
            state.state = 'UNCONNECTED';
            state.check_state.end = new Date().toISOString();
        },
    },
});

export const {
    started_connect,
    successed_connect,
    failed_connect,
} = neo4j.actions;

export function connect () {
    return (dispatch) => {
        dispatch(started_connect());

        maneger.updateState(
            // success
            (data)=>{
                dispatch(successed_connect());
            },
            // failed
            (error)=>{
                dispatch(failed_connect());
            },
        );
    };
};

export default neo4j.reducer;
