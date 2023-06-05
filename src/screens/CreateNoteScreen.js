import React, { useState, useContext, useCallback } from 'react';
import DocumentPicker, { types } from "react-native-document-picker";
import { ScrollView, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { Input, Button, Text } from '@rneui/themed';
import Spacer from '../components/Spacer';
// import FileUpload from '../components/FileUpload';
import { Context as AuthContext } from '../context/AuthContext';

const CreateNoteScreen= ({ navigation }) => {

    const { state, createNote, clearErrorMessage } = useContext(AuthContext);

    const [uid, setuid] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [department, setDepartment] = useState('');  
    const [fileResponse, setFileResponse] = useState([]);

    const handleDocumentSelection = useCallback(async () => {
        try {
          const response = await DocumentPicker.pick({
            presentationStyle: 'fullScreen',
            allowMultiSelection: true,
            // type: [types.pdf,
            //        types.doc,
            //        types.docx,
            //        types.images,
            //        types.zip,
            //        types.ppt]
          });
          setFileResponse(response);
        } catch (err) {
          console.warn(err);
        }
      }, []);

    return(
        <ScrollView style={styles.container}>
             <Spacer>
                 { state.message ? <Text style={styles.error}>{state.message}</Text> : null }       
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
                {fileResponse.map((file, index) => (
                <Text
                    key={index.toString()}
                    style={styles.uri}
                    numberOfLines={1}
                    ellipsizeMode={'middle'}>
                    {file?.uri}
                </Text>
                ))}
                  {/* User id */}
                  <Input label="User Id"
                    value={uid}
                    onChangeText={setuid}
                    autoCorrect={false}
                    placeholder="Enter the UserId" />  

                <Button title="Select Notes to Upload 📑" onPress={handleDocumentSelection} />
                
                <Spacer>
                   <Button title="Upload" onPress={() => createNote({ title, description, department, fileResponse, uid })} />
                </Spacer>
          </Spacer>
        </ScrollView>
    );
};  


const styles = StyleSheet.create({

    container: {
        padding: 40,
        marginTop: 160
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