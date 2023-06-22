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
                <View style={styles.imageCenter}>
                    <Image
                        style={styles.tinyLogo}
                        source={{
                        uri: 'https://niefgc.ac.in/images/nie.png',
                    }}
                    />
                </View>
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

   imageCenter: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    tinyLogo: {
        width: 95,
        height: 120,
    },

    center: {
        textAlign: 'center',
    },
  
})

export default SplashSceen;
