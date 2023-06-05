import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, Image } from "react-native";
import { Text, Input, Button, Avatar } from '@rneui/themed';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const SigninScreen = ({ navigation }) => {

     const {state, signin, clearErrorMessage } = useContext(AuthContext);

     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');

     useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            clearErrorMessage();
     });
     return unsubscribe;
    }, [navigation]);
  
    return (
        <View style={styles.container}>
            {/* <NavigationEvents onWillFocus={clearErrorMessage} /> */}
           <Spacer>
           <Spacer>
                <Image
                    style={styles.tinyLogo}
                    source={{
                    uri: 'https://niefgc.ac.in/images/nie.png',
                }}
                />
            </Spacer>
            <Spacer />
             <Text h4 style={styles.center}>Sign In to upload a Note.</Text>
            </Spacer>
            <Spacer />
           <Spacer />
          
           <Spacer>
                {/* Email Address */}
               <Input label="Email"
                      value={email}
                      onChangeText={setEmail}
                      autoCapitalize='none'
                      autoCorrect={false} />
                {/* Password */}
               <Input label="Password"
                      value={password}
                      onChangeText={setPassword}
                      autoCapitalize='none'
                      autoCorrect={false}
                      secureTextEntry />
                {/* Signin Button */}
                <Spacer>
                    <Button title="Sign In" onPress={() =>signin({ email, password }) } />
                </Spacer>
           </Spacer>
           <Text onPress={() => navigation.navigate('Register')} style={styles.link}>Not Registered? Sign Up</Text>

        <Spacer>
        { state.message ? <Text style={styles.error}>{state.message}</Text> : null }       
        </Spacer>
       </View>
       )
   };  

SigninScreen.navigationOptions = () => {
    return {
        header: null
    };
};


const styles = StyleSheet.create({

     container: {
        padding: 40,
        marginTop: 160
    },

    tinyLogo: {
        width: 95,
        marginLeft: 195,
        height: 100,
    },

    center: {
      textAlign: 'center',
    },

    link:{
        textAlign: 'center',
        color: 'blue',
        textDecorationLine: 'underline',
        margin: 10
    },

     error:{
        color: 'red',
        textAlign: 'center'
    }
  
})

export default SigninScreen;