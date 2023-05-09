import { createSlice } from '@reduxjs/toolkit';

import maneger from '../manegers/Firebase.js';
import peplin from '../manegers/Peplin.js';

import {
    getAuth,
    signOut,
} from "firebase/auth";

export const firebase = createSlice({
    name: 'firebase',
    initialState: {
        state: null,
        check_signin: { start: null, end: null },
        sign_in: { start: null, end: null, error: null },
        credentials: { start: null, end: null, error: null },
        link: {
            // key: providerId, value: { start: null, end: null },
        },
        unlink: {
            // key: providerId, value: { start: null, end: null },
        },
    },
    reducers: {
        // get Auth
        start_getAuth: (state, action)=> {
            state.check_signin.start = new Date().toISOString();
            state.check_signin.end = null;
        },
        authed_getAuth: (state, action)=> {
            state.state = 'AUTHED';

            state.check_signin.end = new Date().toISOString();
        },
        unauthed_getAuth: (state, action)=> {
            state.state = 'UNAUTHED';

            state.check_signin.end = new Date().toISOString();
        },
        // find Credentials
        start_findCredentials: (state, action)=> {
            state.credentials.start = new Date().toISOString();
            state.credentials.end = null;
        },
        successed_findCredentials: (state, action)=> {
            state.credentials.end = new Date().toISOString();
        },
        failed_findCredentials: (state, action)=> {
            state.credentials.end = new Date().toISOString();
        },
        // sigin in google
        start_signIn: (state)=> {
            state.state = 'UNAUTHED';

            state.sign_in.start = new Date().toISOString();
            state.sign_in.end = null;
        },
        successed_signIn: (state, action)=> {
            state.state = 'AUTHED';

            state.sign_in.end = new Date().toISOString();
        },
        failed_signIn: (state, action)=> {
            state.state = 'FAILED';

            state.sign_in.end = new Date().toISOString();
        },
        start_signOut: (state, action)=> {
        },
        successed_signOut: (state, action)=> {
        },
        failed_signOut: (state, action)=> {
        },
        // link provider
        started_linkProvider: (state, action)=> {
            const provider_id = action.payload;

            state.link[provider_id] = { start: timestamp(), end: null };
        },
        successed_linkProvider: (state, action)=> {
            const provider_id = action.payload;

            state.link[provider_id].end = timestamp();
        },
        failed_linkProvider: (state, action)=> {
            const provider_id = action.payload;

            state.link[provider_id].end = timestamp();
        },
        // unlink provider
        started_unlinkProvider: (state, action)=> {
            const provider_id = action.payload;

            state.unlink[provider_id] = { start: timestamp(), end: null };
        },
        successed_unlinkProvider: (state, action)=> {
            const provider_id = action.payload;

            state.unlink[provider_id].end = timestamp();
        },
        failed_unlinkProvider: (state, action)=> {
            const provider_id = action.payload;

            state.unlink[provider_id].end = timestamp();
        },
    },
});

export const {
    // sign in
    start_getAuth,
    authed_getAuth,
    unauthed_getAuth,
    // sign in
    start_findCredentials,
    successed_findCredentials,
    failed_findCredentials,
    // sign in
    start_signIn,
    successed_signIn,
    failed_signIn,
    // sign out
    start_signOut,
    successed_signOut,
    failed_signOut,
    // link
    started_linkProvider,
    successed_linkProvider,
    failed_linkProvider,
    // unlink
    started_unlinkProvider,
    successed_unlinkProvider,
    failed_unlinkProvider,
} = firebase.actions;

/** **************************************************************** *
 * Firebase から認証情報を取得する。
 * **************************************************************** */
export const getAuthFirebase = ()=> {
    return (dispatch) => {
        dispatch(start_getAuth());

        maneger.getAuth(
            (user)=> dispatch(authed_getAuth()),
            ()=> dispatch(unauthed_getAuth()));
    };
};

/** **************************************************************** *
 * peplin から Credentials を取得する。
 * **************************************************************** */
export const findCredentials = (user)=> {
    return (dispatch) => {
        dispatch(start_findCredentials());

        peplin.findCredentials(
            user.uid,
            (credentials)=> {
                maneger.credentials(credentials.reduce((ht,d)=>{
                    ht[d.firebase_auth_provider_id] = d;
                    return ht;
                },{}));

                dispatch(successed_findCredentials(credentials));
            },
            (error)=> dispatch(failed_findCredentials()));
    };
};

/** **************************************************************** *
 * Firebase の認証で サインイン by Google
 * **************************************************************** */
export const signInFirebase = (provider_id)=> {
    return (dispatch)=> {
        dispatch(start_signIn());

        maneger.signInWithPopup(
            provider_id,
            ()=>dispatch(successed_signIn()),
            ()=>dispatch(failed_signIn()));
    };
};

/** **************************************************************** *
 * Firebase の認証から サインアウト
 * **************************************************************** */
export function signOutFirebase () {
    return (dispatch)=> {
        const auth = getAuth();

        dispatch(start_signOut());

        signOut(auth).then(() => {
            dispatch(successed_signOut());
        }).catch((error) => {
            dispatch(failed_signOut());
        });
    };
}

/** **************************************************************** *
 * Proivder をリンクする。
 * **************************************************************** */
export const linkProvider = (provider_id)=> {
    return (dispatch) => {
        dispatch(started_linkProvider());

        maneger.linkWithPopup(
            provider_id,
            ()=> dispatch(successed_linkProvider()),
            ()=> dispatch(failed_linkProvider()));
    };
};

/** **************************************************************** *
 * Proivder をリンクを解除する。
 * **************************************************************** */
export const unlinkProvider = (provider_id)=> {
    return (dispatch) => {
        dispatch(started_unlinkProvider(provider_id));

        maneger.unlink(
            provider_id,
            ()=> dispatch(successed_unlinkProvider(provider_id)),
            ()=> dispatch(failed_unlinkProvider(provider_id)));
    };
};

export default firebase.reducer;

function timestamp () {
    return new Date().toISOString();
}
