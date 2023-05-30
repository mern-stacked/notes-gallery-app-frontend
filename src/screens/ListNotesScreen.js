import React from 'react';
import { View, Text, StyleSheet, Button } from "react-native";

const ListNotesScreen= ({ navigation }) => {
  
    return <View>
        <Text>List Notes Screen</Text>
        <Button 
            title="Go to Note Details"
            onPress={() => { navigation.navigate('Notes Detail')} }
        ></Button>
    </View>
};  


const styles = StyleSheet.create({

  
})

export default ListNotesScreen;