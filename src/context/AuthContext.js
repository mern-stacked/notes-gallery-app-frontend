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
        case 'signout':
            return { token: null, message: '' }
        default:
            return state;
    }
};  


const clearErrorMessage = dispatch => async () => {
    dispatch({ type: 'clear_error_message' });
}

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if(token){
        dispatch({ type: 'signin', payload: token  });
        navigate('Account' )       
    } else {
        navigate('Register')
    }
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


const signout = (dispatch) =>  async () => {
        // Sign out
        await AsyncStorage.removeItem('token');
        dispatch({ type: 'signout' });
        navigate('UserLogin');       

}

export const { Provider, Context } = createDataContext(
    authReducer,
    {signup,
    signin,
    signout,
    clearErrorMessage,
    tryLocalSignin
},
    { token: null, message: '' }
);