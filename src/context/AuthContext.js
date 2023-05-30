import createDataContext from "./createDataContext";
import serverAPI from '../api/server';

const authReducer = (state, action ) => {
    switch(action.type){
        default:
            return state;
    }
};  


const signup = (dispatch) =>  {
    return async ({ uname, email, password, designation }) =>  {
        // Make a API request to signup with that entered email and password
        try{
            const response = await serverAPI.post('/users/signup',
                    { name: uname, 
                      email,
                      password, 
                      designation
                    });
            // console.log(response)
            // const response = await fetch('https://notes-app-backend-api.onrender.com/api/users/signup', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify( 
            //       { name: uname, 
            //         email,
            //         password, 
            //         designation
            //       })
            // });
            // response.json()
            console.log('Success: ' + response.data);
        } catch (err) {
            console.log('Error : ' + err.message);
        }
        
        // If we signup, modify our state, and say that we are authenticated

        // If signing up fails, manage it
    };
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
    { isSignedIn: false }
);