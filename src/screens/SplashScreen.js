import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, Image } from "react-native";

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
                <Image
                    style={styles.tinyLogo}
                    source={{
                    uri: 'https://niefgc.ac.in/images/nie.png',
                }}
                />
            </Spacer>
            <Spacer />
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
    tinyLogo: {
        width: 95,
        marginLeft: 195,
        marginTop: 250,
        height: 100,
    },

    center: {
        textAlign: 'center',
    },
  
})

export default SplashSceen;
