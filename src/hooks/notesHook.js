import { useContext } from "react";
import { Context as NotesContext } from "../context/NotesContext";
import { Context as AuthContext } from '../context/AuthContext';

export default () => {
    const { createNote, fetchUserNotes } = useContext(NotesContext);
    const { state : { userId } } = useContext(AuthContext);

    const fetchUsersNotes = async () => {
        await fetchUserNotes(userId);
    };

    return [fetchUsersNotes];
};

