import React, { useState, useContext, useEffect } from 'react';
import { ScrollView, View, StyleSheet, Image, ActivityIndicator } from "react-native";
import { Text, Input, Button } from '@rneui/themed';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const isValidObjField = (obj) => {
    return Object.values(obj).every(value => value.trim())
}

const updateError = (error, stateUpdater) => {
    stateUpdater(error);
    setTimeout(() => { 
        stateUpdater()
    }, 2500);
}

const isValidEmail = (value) => {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(nie.ac.in)$/;
    return regex.test(value);
}

const SignupScreen = ({ navigation }) => {

    const {state, signup, clearErrorMessage} = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            clearErrorMessage();
         });
         return unsubscribe;
    }, [navigation]);
    

    const [ userInfo, setUserInfo ] = useState({
        uname: '',
        email: '',
        password: '',
        cpassword: '',
        designation: '',
    });

    const [error, setError ] = useState('');

    const { uname, email, password, cpassword, designation } = userInfo;

    const handleOnchangeText = (value, fieldName) => {
        setUserInfo( { ...userInfo, [fieldName]: value } );
    };

    const isValidForm = () => {
        //accept only if all the field have value
        if(!isValidObjField(userInfo)){
            return updateError('All fields are required!', setError)
        }
        // id valid uname with three or more characters
        if(!uname.trim() || uname.length < 3) {
            return updateError('username should be more than three characters', setError)
        }
        // only valid email id is allowed
        if(!isValidEmail(email)) return updateError('Invalid Email', setError)
        // Password must have 8 or more characters
        if(!password.trim() || password.length < 8 ){
            return updateError('Password is less than 8 characters!', setError)
        }
        //  Handling Backend Validation from the server
        if(state.message){
            return updateError('Something went wrong during signin', setError);
        }
        // password and cpassword must be the same
        if(password !== cpassword) return updateError('Password doesnot match!', setError)

        return true;
    
    }

    const submitForm = async () => {
        if(isValidForm()){
            setLoading(true);
            await signup({ uname, email, password, designation });
            setUserInfo({
                uname: '',
                email: '',
                password: '',
                cpassword: '',
                designation: '',
            })
            setLoading(false);
        }
    }
    
    return (
     <ScrollView style={styles.container}>    
        <Spacer>
            <View style={styles.imageCenter}>
                <Image
                    style={styles.tinyLogo}
                    source={{
                    uri: 'https://niefgc.ac.in/images/nie.png',
                }}
                />
            </View>
            <Spacer />
             <Text h2 style={styles.center}>Welcome!</Text>
             <Text h4 style={styles.center}>Sign Up to upload a Note.</Text>
        </Spacer>
        <Spacer />
        <Spacer>
                <Spacer />
                { error ? (
                    <Text style={styles.error}>{error}</Text>
                ) : null }
                {/* Name */}
                <Input 
                    label="Name"
                    value={uname}
                    onChangeText={(value) => handleOnchangeText(value, 'uname') }
                    placeholder="This will be your username" />
                {/* Email Address */}
                <Input label="Email"
                    value={email}
                    onChangeText={(value) => handleOnchangeText(value, 'email') }
                    autoCapitalize='none'
                    autoCorrect={false}
                    placeholder="Enter your email address" />
                {/* Password */}
                <Input label="Password"
                    value={password}
                    onChangeText={(value) => handleOnchangeText(value, 'password') }
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry 
                    placeholder="Set a password" />
                {/* Confirm Password */}
                <Input label="Confirm Password"
                    value={cpassword}
                    onChangeText={(value) => handleOnchangeText(value, 'cpassword') }
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry 
                    placeholder="Re-enter the same password"
                />
                {/* Designation */}
                <Input label="Designation"
                        value={designation}
                        onChangeText={(value) => handleOnchangeText(value, 'designation') }
                        placeholder="Faculty / Student"
                />
          
                <Spacer>
                  {/* SignUp Button */}
                  { loading ? 
                       
                      <ActivityIndicator size="large" color="#00ff00" /> : 
                      <Button title="Sign Up" onPress={submitForm} />
                  }
                </Spacer>
        </Spacer>
        
        <Text onPress={() => navigation.navigate('UserLogin')} style={styles.link}>Already Registered? Sign in</Text>

       
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