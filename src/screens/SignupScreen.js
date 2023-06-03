import React, { useState, useContext, useEffect } from 'react';
import { ScrollView, StyleSheet } from "react-native";
import { Text, Input, Button, Avatar } from '@rneui/themed';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {

    const {state, signup, clearErrorMessage, tryLocalSignin } = useContext(AuthContext);

    useEffect(() => {
        tryLocalSignin();
        const unsubscribe = navigation.addListener('focus', () => {
            clearErrorMessage();
         });
         return unsubscribe;
    }, [navigation]);
    
    const [uname, setUname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setcPassword] = useState('');
    const [designation, setDesignation] = useState('');

    
    return (
     <ScrollView style={styles.container}>    
        {/* <NavigationEvents onWillFocus={clearErrorMessage} />        */}
        <Spacer>
            <Avatar
                    size={68}
                    rounded
                    icon={{ name: "book", type: "font-awesome" }}
                    containerStyle={{ backgroundColor: "blue", marginTop: 30, marginBottom: 30, marginLeft: 140 }}
            />
             <Text h4 style={styles.center}>Welcome!</Text>
             <Text h4 style={styles.center}>Sign Up to upload a Note.</Text>
        </Spacer>
        <Spacer />
        <Spacer>
                <Spacer />
                {/* Name */}
                <Input 
                    label="Name"
                    value={uname}
                    onChangeText={setUname}
                    placeholder="This will be your username" />
                {/* Email Address */}
                <Input label="Email"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize='none'
                    autoCorrect={false}
                    placeholder="Enter your email address" />
                {/* Password */}
                <Input label="Password"
                    value={password}
                    onChangeText={setPassword}
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry 
                    placeholder="Set a password" />
                {/* Confirm Password */}
                <Input label="Confirm Password"
                    value={cpassword}
                    onChangeText={setcPassword}
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry 
                    placeholder="Re-enter the same password"
                />
                {/* Designation */}
                <Input label="Designation"
                        value={designation}
                        type="select"
                        onChangeText={setDesignation}
                        placeholder="Faculty / Student"
                />
          
                <Spacer>
                  <Button title="Sign Up" onPress={() => signup({ uname, email, password, designation })} />
                </Spacer>
        </Spacer>
        
        <Text onPress={() => navigation.navigate('UserLogin')} style={styles.link}>Already Registered? Sign in</Text>

        <Spacer>
        { state.message ? <Text style={styles.error}>{state.message}</Text> : null }       
        </Spacer>
    </ScrollView>
    )
};  

SignupScreen.navigationOptions = () => {
    return {
        header: null
    };
};

const styles = StyleSheet.create({

    container: {
        padding: 40,
        marginTop: 30
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

export default SignupScreen;