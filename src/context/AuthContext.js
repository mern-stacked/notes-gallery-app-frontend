// import { storage } from "../mmkvStorage";
import createDataContext from "./createDataContext";
import serverAPI from '../api/server';
import SigninScreen from '../screens/SigninScreen';
import { navigate, navigationRef } from '../RootNavigation';

// import { navigate } from '../navigationRef';
import * as RootNavigation from '../RootNavigation';

const authReducer = (state, action ) => {
    switch(action.type){
        case 'signup_error':
            return { ...state, message: action.payload }
        case 'signup':
            return { message: '',  token: action.payload }
        default:
            return state;
    }
};  


const signup = (dispatch) =>  async ({ uname, email, password, designation }) =>  {
        // Make a API request to signup with that entered email and password
        try{
            const response = await serverAPI.post('/users/signup', { name: uname, email, password, designation });
            console.log(response.data.token)
          
            // dispatch({ type: 'signup', payload: response.data.token  });

            // await AsyncStorage.setItem('token', response.data.token );
            navigate('UserLogin', { uname } )

            // dispatch({ type: 'signup', payload: { message: 'User created successfully. Please Login' , token: response.data.token} });
            // RootNavigation.navigate('UserLogin', { uname } )
            navigationRef.current.getRootState()

            
        } catch (err) {
            dispatch({ type: 'signup_error', payload: 'Something went wrong with signup.' })
        }
        
        // If we signup, modify our state, and say that we are authenticated  


        // If signing up fails, manage it
    };


const signin = (dispatch) => {
    return () => {

        // Try signing in

        // Handle Success by updating state 

        // Handle failure by showing error message



    };
}

const signout = (dispatch) => {
    return () => {
        // Sign out
    }
}

export const { Provider, Context } = createDataContext(
    authReducer,
    {signup, signin, signout},
    { token: null, message: '' }
);