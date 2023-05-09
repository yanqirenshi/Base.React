import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {
    getAuth as getAuthFirebase,
    onAuthStateChanged,
    signInWithPopup,
    linkWithPopup,
    unlink,
    GoogleAuthProvider,
    TwitterAuthProvider,
    GithubAuthProvider,
    FacebookAuthProvider,
    // MicrosoftAuthProvider,
    OAuthProvider,
} from "firebase/auth";

import peplin from './Peplin.js';

class Firebase {
    constructor () {
        const firebaseConfig = {
            apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
            authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
            projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
            storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
            messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
            appId: process.env.REACT_APP_FIREBASE_APP_ID,
            measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
        };

        this._app = initializeApp(firebaseConfig);
        this._analytics = getAnalytics(this._app);

        this._auth = {}; // key: provider, value: { user: null, error: null }

        this._credentials = {};
    }
    user () {
        return this._auth || null;
    }
    credentials (v) {
        if (arguments.length===1)
            this._credentials = v;

        return this._credentials;
    }
    credential (provider_id, value) {
        if (arguments.length===2) {
            this._credentials[provider_id] = value;

            peplin.saveCredential(this._auth.user.uid, provider_id, value);
        }

        return this._credentials[provider_id] || null;
    }
    successedAuth (provider, user) {
        this._auth = {
            user: user,
            error: null,
        };
    }
    failedAuth (provider, error) {
        this._auth = {
            user: null,
            credential: null,
            error: error,
        };
    }
    getAuth (cb_success, cb_failed) {
        const auth = getAuthFirebase();

        // TODO: 複数プロバイダに対応したい。
        const provider_name = 'google';

        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.successedAuth(provider_name, user);
                cb_success(user);
            } else {
                this.successedAuth(provider_name, null);
                cb_failed();
            }
        });
    }
    signInWithPopup (provider_id, cb_success, cb_failed) {
        const auth = getAuthFirebase();
        //TODO: auth が null の時の安全装置を追加する。

        const provider =  this.getProvider(provider_id);

        const successed = (result) => {
            const credential = provider.credentialFromResult(result);
            this.credential(provider_id, credential);

            const user = result.user;
            this._auth = {
                user: user,
                error: null,
            };

            cb_success();
        };

        const failed = (error) => {
            this._auth = {
                user: null,
                credential: null,
                error: {
                    core: error,
                    code: error.code,
                    message: error.message,
                    email: error.email,
                    credential: GoogleAuthProvider.credentialFromError(error),
                },
            };

            cb_failed();
        };

        signInWithPopup(auth, new provider()).then(successed).catch(failed);
    }
    linkWithPopup(provider_id, cb_success, cb_failed) {
        const auth = getAuthFirebase();

        const provider =  this.getProvider(provider_id);

        const successed = (result)=> {
            const credential = provider.credentialFromResult(result);

            this.credential(provider_id, credential);

            cb_success();
        };

        const failed = (error) => {
            console.log(error);
            cb_failed();
        };

        linkWithPopup(auth.currentUser, new provider()).then(successed).catch(failed);
    }
    unlink (provider_id, cb_success, cb_failed) {
        const auth = getAuthFirebase();

        unlink(auth.currentUser, provider_id).then(() => {
            cb_success();
        }).catch((error) => {
            cb_failed();
        });
    }
    getProvider (provider_id) {
        switch (provider_id) {
        case 'apple.com':     return OAuthProvider('apple.com');
        case 'facebook.com':  return FacebookAuthProvider;
        case 'github.com':    return GithubAuthProvider;
        case 'google.com':    return GoogleAuthProvider;
        case 'microsoft.com': return OAuthProvider('microsoft.com');
        case 'twitter.com':   return TwitterAuthProvider;
        default:
            throw new Error();
        }
    }
}

const firebase = new Firebase();

export default firebase;
