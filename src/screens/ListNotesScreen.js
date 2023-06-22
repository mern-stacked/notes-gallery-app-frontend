import React, { useState, useEffect, useContext } from 'react';
import { ScrollView, View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Text, ListItem } from '@rneui/themed';
import { Context as NotesContext } from '../context/NotesContext';
import Spacer from '../components/Spacer';
import notesHook from '../hooks/notesHook';

const ListNotesScreen= ({ navigation }) => {

    const { state } = useContext(NotesContext);
    const [ fetchUserNotes ] = notesHook();

    console.log(`data ${state.data}`)

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            fetchUserNotes()
       });

       return unsubscribe;
    }, [navigation]) 

  
    return(
        <ScrollView style={styles.container}> 
              <View>
                    {state.data.map((item) => {
                        return <View key={item.id}>
                                <Text>{item.title}</Text>
                                <Text>{item.department}</Text>
                                <Text>{item.description}</Text>
                            </View>
                    })}
              </View>
        </ScrollView>
    ) ;
};


const styles = StyleSheet.create({

    container: {
        padding: 40,
        marginTop: 160
    },

    center: {
        textAlign: 'center',
    }
  
})

export default ListNotesScreen;