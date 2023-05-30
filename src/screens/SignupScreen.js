import React, { useState, useContext } from 'react';
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from '@rneui/themed';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {

    const {state, signup} = useContext(AuthContext);

    const [uname, setUname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [designation, setDesignation] = useState('');

  
    return (
     <View style={styles.container}>
        <Spacer>
             <Text h4 style={styles.heading}>Welcome!</Text>
            <Text h4 style={styles.heading}>Sign Up to upload a Note.</Text>
            <Spacer />
            <Spacer />
        </Spacer>
        <Spacer>
            <Input 
                label="Name"
                value={uname}
                onChangeText={setUname}
            />
        </Spacer>
        <Spacer>
            <Input label="Email"
                   value={email}
                   onChangeText={setEmail}
                   autoCapitalize='none'
                   autoCorrect={false} />
        </Spacer>
        <Spacer>
            <Input label="Password"
                   value={password}
                   onChangeText={setPassword}
                   autoCapitalize='none'
                   autoCorrect={false}
                   secureTextEntry />
        </Spacer>
        <Spacer>
          <Input label="Designation"
                 value={designation}
                 onChangeText={setDesignation} />
        </Spacer>
        <Spacer>
          <Button title="Sign Up" onPress={() => signup({ uname, email, password, designation })} />
        </Spacer>
        <Text onPress={() => navigation.navigate('Login')} style={styles.link}>Already Registered? Sign in</Text>
    </View>
    )
};  

SignupScreen.navigationOptions = () => {
    return {
        header: null
    };
};

const styles = StyleSheet.create({

    container: {
        padding: 10,
        flex: 1,
        justifyContent: 'center',
        marginTop: 100
    },

    heading: {
      textAlign: 'center',
    },

    link:{
        textAlign: 'center',
        color: 'blue',
        textDecorationLine: 'underline'
    }

})

export default SignupScreen;