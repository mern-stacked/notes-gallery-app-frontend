import createDataContext from "./createDataContext";
import serverAPI from '../api/server';
import { navigate } from '../RootNavigation';

const notesReducer = (state, action) =>  {

    switch(action.type){
        case 'note_create_success':
             return { ...state, message: action.payload }
        case 'note_create_fail':
             return { ...state, message: action.payload }
        case 'notes_fetch_success':
             return { ...state, data: action.payload }
        case 'notes_fetch_fail':
             return { ...state, message: action.payload }
        case 'reset':
              return { ...state, data: [] }   
        default:
            return state;   
    }

};


const reset = (dispatch) => async() => {
    dispatch({ type: 'reset' })
}

const createNote = (dispatch) => async ({ title, description, department, uid }) => {

    try{
        const response = await serverAPI.post('/notes', {title, description, department, creator: uid}  );
     
        dispatch({ type: 'note_create_success', payload: 'Note created successfully' });
        reset(); 
        navigate('ListNotes')       

    } catch (err) {
        console.log(err)
        dispatch({ type: 'note_create_fail', payload: 'Something went wrong while creating the note' })
    }
};


const fetchUserNotes = (dispatch) => async (uid) => {
    try{
        // Make a API request to signup with that entered email and password
        const response = await serverAPI.get(`/notes/user/${uid}`);
        dispatch({ type: 'notes_fetch_success', payload: response.data.notes });
        navigate('ListNotes')       

    } catch (err) {
        dispatch({ type: 'notes_fetch_fail', payload: 'Something went wrong while fetching notes.' })
    }
};



export const { Provider, Context } = createDataContext(
    notesReducer,
    {
        createNote,
        fetchUserNotes,
        reset
    },
    {
        // message: '',
        data: []
    }
)
