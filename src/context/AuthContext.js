import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'signup':
            return { errorMessage: '', token: action.payload };
        default:
            return state;
    }
};

const signup = (dispatch) => async ({ email, password }) => {
    // make api request to sign up with that email and password
    // if we sign up, modify our state, and saay that we are authenticated
    // if signing up fails, we probably need to reflect an error message somewhere
    try {
        const response = await trackerApi.post('signup', { email, password });

        await AsyncStorage.setItem('token', response.data);

        dispatch({ type: 'signup', payload: response.data });

        // navigate to main flow
        navigate('TrackList');
    } catch (err) {
        dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' });
        console.log('=',err.message);
    }
};

const signin = (dispatch) => {
    return ({ email, password }) => {
        // try to sign in
        // Handle success by updating state
        // Handle failure by showing error message
    }
};

const signout = (dispatch) => {
    return () => {
        // somehow to sign out!!!
    }
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signup, signin, signout },
    { isSignedIn: false, errorMessage: '' }
);
