import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from "react-native";

import { Avatar } from '@rneui/themed';
import { Ionicons } from '@expo/vector-icons';
import Spacer from '../components/Spacer';

import { Context as AuthContext } from '../context/AuthContext';

const SplashSceen = () => {

    const { tryLocalSignin } = useContext(AuthContext);

    useEffect(() => {
        tryLocalSignin();
    }, []);

    return(
        <View style={styles.container}>
            <Spacer>
                <Avatar
                    size={68}
                    rounded
                    icon={{ name: "book", type: "font-awesome" }}
                    containerStyle={{ backgroundColor: "blue", marginTop: 30, marginBottom: 30, marginLeft: 140 }}
                />
            </Spacer>
        </View>
    );
  }


const styles = StyleSheet.create({

     container: {
        padding: 40,
        marginTop: 160
    },
  
})

export default SplashSceen;
