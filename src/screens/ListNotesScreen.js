import React from 'react';
import { View, Text, StyleSheet, Button } from "react-native";
import Spacer from '../components/Spacer';

const ListNotesScreen= ({ navigation }) => {
  
    return(
        <View style={styles.container}>
            <Spacer>
                <Text>All the notes will be displayed here</Text>
            </Spacer>
            <Spacer>
                <Button 
                    title="Go to Note Details"
                    onPress={() => { navigation.navigate('NotesDetail')} }
                ></Button>
            </Spacer>
        </View>
    ) ;
};


const styles = StyleSheet.create({

container: {
    padding: 40,
    marginTop: 160
}

  
})

export default ListNotesScreen;