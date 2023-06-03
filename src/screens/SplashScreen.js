import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from "react-native";

import { Avatar, Text} from '@rneui/themed';
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
                    size={110}
                    rounded
                    icon={{ name: "book", type: "font-awesome" }}
                    containerStyle={{ backgroundColor: "blue", marginTop: 170, marginLeft: 120 }}
                />
            </Spacer>
            <Spacer>
               <Text h4 style={styles.center}>Loading....</Text> 
            </Spacer>
        </View>
    );
  }


const styles = StyleSheet.create({

     container: {
        padding: 40,
        marginTop: 160
    },

    center: {
        textAlign: 'center',
    },
  
})

export default SplashSceen;
