import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import Spacer from '../components/Spacer';

const NotesDetailScreen = ({ navigation }) => {
  
    return(
        <View style={styles.container}>
            <Spacer>
                <Text>Notes Detail Screen:</Text>
                <Text>Detailed Info oof the selected note will be rendered here</Text>

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

export default NotesDetailScreen;