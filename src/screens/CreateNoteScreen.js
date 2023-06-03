import React from 'react';
import { View, StyleSheet, Text } from "react-native";
import Spacer from '../components/Spacer';


const CreateNoteScreen= ({ navigation }) => {
  
    return(
        <View style={styles.container}>
            <Spacer>
                <Text>Create a note Screen</Text>
            </Spacer>
        </View>
    );
};  


const styles = StyleSheet.create({

    container: {
        padding: 40,
        marginTop: 160
    }
    
  
})

export default CreateNoteScreen;