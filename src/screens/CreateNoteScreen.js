import React, { useState, useContext, useCallback, useEffect } from 'react';
import { ScrollView, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { Input, Button, Text } from '@rneui/themed';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { Context as NotesContext } from '../context/NotesContext';
// import useSaveNote from '../hooks/useSaveNote';

const CreateNoteScreen= ({ navigation }) => {

    const { state,  clearErrorMessage } = useContext(AuthContext);
    const { createNote } = useContext(NotesContext);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [department, setDepartment] = useState('');  
    const [fileResponse, setFileResponse] = useState([]);
    const [uid, setUid] = useState(state.userId)

    // const [saveNote] = useSaveNote();
  
    return(
        <ScrollView style={styles.container}>
             <Spacer>
                 { state.message ? <Text h5 style={ {textAlign: 'center'} }>{state.message}</Text> : null }       
              </Spacer>

            <Spacer>
                <Text h3 style={styles.center}>Create & Upload a Note</Text>
            </Spacer>

            <Spacer>
                <Spacer />
                {/* Subject Title */}
                <Input 
                    label="Subject Title"
                    value={title}
                    onChangeText={setTitle}
                    placeholder="Ex. Machine Learning, AI" />
                {/* Subject Description  */}
                <Input label="Description"
                    value={description}
                    onChangeText={setDescription}
                    autoCorrect={false}
                    placeholder="Provide some description" />
                {/* Department */}
                <Input label="Department"
                    value={department}
                    onChangeText={setDepartment}
                    autoCorrect={false}
                    placeholder="Enter the department name" />               
                {/* File Upload Button */}
                <StatusBar barStyle={'dark-content'} />
                {/* {fileResponse.map((file, index) => (
                <Text
                    key={index.toString()}
                    style={styles.uri}
                    numberOfLines={1}
                    ellipsizeMode={'middle'}>
                    {file?.uri}
                </Text>
                ))} */}
                  {/* User id */}
                  <Input label="User Id"
                    value={uid}
                    // onChangeText={setUid}
                    autoCorrect={false}
                    placeholder="Enter the UserId" />
                 
                
                <Spacer>
                   <Button title="Upload" onPress={() => createNote({ title, description, department, uid })} />
                   {/* <Button title="Upload" onPress={saveNote} /> */}
                </Spacer>
          </Spacer>
        </ScrollView>
    );
};  


const styles = StyleSheet.create({

    container: {
        padding: 40,
        marginTop: 40
    },

    center: {
        textAlign: 'center',
    },

    error:{
        color: 'red',
        textAlign: 'center'
    }

    
  
})

export default CreateNoteScreen;