import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from "./createDataContext";
import serverAPI from '../api/server';
import { navigate } from '../RootNavigation';

const authReducer = (state, action ) => {
    switch(action.type){
        case 'signup_error':
            return { ...state, message: action.payload }
        case 'signin':
            return { message: '',  token: action.payload }
        case 'clear_error_message':
            return { ...state, message: '' }
        default:
            return state;
    }
};  


const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clear_error_message' });
}


const signup = (dispatch) =>  async ({ uname, email, password, designation }) =>  {
    try{
            // Make a API request to signup with that entered email and password
            const response = await serverAPI.post('/users/signup', { name: uname, email, password, designation });
            // If we signup, modify our state, and say that we are authenticated  
            await AsyncStorage.setItem('token', response.data.token );
            dispatch({ type: 'signin', payload: response.data.token  });
            navigate('UserLogin', { uname } )       
            // If signing up fails, manage it
        } catch (err) {
            dispatch({ type: 'signup_error', payload: 'Something went wrong with signup.' })
        }
        
    };


const signin = (dispatch) => async ({ email, password }) => {
    try{
        // Make a API request to signup with that entered email and password
        const response = await serverAPI.post('/users/login', { email, password });
        // If we signup, modify our state, and say that we are authenticated  
        await AsyncStorage.setItem('token', response.data.token );
        dispatch({ type: 'signin', payload: response.data.token  });
        navigate('Account', { email } )       
        // If signing up fails, manage it
    } catch (err) {
        console.log(err)
        dispatch({ type: 'signup_error', payload: 'Something went wrong with signin.' })
    }
};


const signout = (dispatch) => {
    return () => {
        // Sign out
    }
}

export const { Provider, Context } = createDataContext(
    authReducer,
    {signup, signin, signout, clearErrorMessage},
    { token: null, message: '' }
);