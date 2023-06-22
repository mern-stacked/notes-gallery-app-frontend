import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from "./createDataContext";
import serverAPI from '../api/server';
import { navigate } from '../RootNavigation';

const authReducer = (state, action ) => {
    switch(action.type){
        case 'signup_error':
            return { ...state, message: action.payload }
        case 'signup':
            return { message: '', 
                    token: action.payload.token }
        case 'signin':
            return { ...state,
                     message: '', 
                     token: action.payload.token,
                     userId: action.payload.userId,
                     userName: action.payload.userName,
                     userEmail: action.payload.userEmail,
                     userDesignation: action.payload.userDesignation,
                    }
        case 'automaticsignin':
            return { 
                    ...state,
                    message: '', 
                    token: action.payload.token,
                    userId: action.payload.userId,
                    userName: action.payload.userName,
                    userEmail: action.payload.userEmail,
                    userDesignation: action.payload.userDesignation,
                   }
        case 'clear_error_message':
            return { ...state, message: '' }
        case 'signout':
            return { token: null, message: '' }
        case 'note_create_success':
             return { ...state, message: action.payload }
        case 'note_create_fail':
             return { ...state, message: action.payload }
        case 'notes_fetch_success':
             return { ...state, data: action.payload }
        case 'notes_fetch_fail':
             return { ...state, message: action.payload }
        default:
            return state;
    }
};  


const clearErrorMessage = dispatch => async () => {
    dispatch({ type: 'clear_error_message' });
}

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    const userId = await AsyncStorage.getItem('userId');
    const userName = await AsyncStorage.getItem('userName');
    const userEmail = await AsyncStorage.getItem('userEmail');
    const userDesignation = await AsyncStorage.getItem('userDesignation');
    
    if(token && userId ){
        dispatch({ type: 'automaticsignin', payload: { userId, token, userName, userEmail, userDesignation }  });
        navigate('My Account' )       
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
            dispatch({ type: 'signup', payload: response.data.token  });
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
        // If we signin, modify our state, and say that we are authenticated  
        const userId = response.data.user.id;
        const userName = response.data.user.name;
        const userEmail = response.data.user.email;
        const userDesignation = response.data.user.designation;

        const token = response.data.token;

        await AsyncStorage.setItem('token', token );
        await AsyncStorage.setItem('userId', userId );
        await AsyncStorage.setItem('userName', userName );
        await AsyncStorage.setItem('userEmail', userEmail );
        await AsyncStorage.setItem('userDesignation', userDesignation );


        // dispatch({ type: 'signin', payload: JSON.stringify(responseArray) });
        dispatch({ type: 'signin', payload: { userId, token, userName, userEmail, userDesignation } });
        navigate('My Account')       

    } catch (err) {
        dispatch({ type: 'signup_error', payload: true })
    }
};


const signout = (dispatch) =>  async () => {
        // Sign out
        await AsyncStorage.removeItem('token');
        await AsyncStorage.removeItem('userId');
        await AsyncStorage.removeItem('data');

        dispatch({ type: 'signout' });
        navigate('UserLogin' );       

}

export const { Provider, Context } = createDataContext(
    authReducer,
    {
    signup,
    signin,
    signout,
    clearErrorMessage,
    tryLocalSignin,
    },
    { 
      token: null,
      userId: null,
      userName : null,
      userEmail: null,
      userDesignation: null,
      message: '',
    }
);