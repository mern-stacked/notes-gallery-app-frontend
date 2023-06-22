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

const SigninScreen = ({ navigation }) => {

     const {state, signin, clearErrorMessage } = useContext(AuthContext);
     const [loading, setLoading] = useState(false);

     useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            clearErrorMessage();
     });

     return unsubscribe;
    }, [navigation]);

    const [ userInfo, setUserInfo ] = useState({
        email: '',
        password: ''
    });

    const [error, setError ] = useState('');

    const { email, password } = userInfo;

    const handleOnchangeText = (value, fieldName) => {
        setUserInfo( { ...userInfo, [fieldName]: value } );
    };

    const isValidForm = () => {
        //accept only if all the field have value
        if(!isValidObjField(userInfo)){
            return updateError('All fields are required!', setError)
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
      
        return true;
    }

    const submitForm = async () => {
        if(isValidForm()){
            setLoading(true);
            await signin({ email, password });
            setUserInfo({
                email: '',
                password: ''
            })
            setLoading(false);
        }
    }
  
    return (
        <ScrollView style={styles.container}>    
           <Spacer>
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
                    <Text h4 style={styles.center}>Sign In to upload a Note.</Text>
                </Spacer>

                <Spacer />
               <Spacer />
          
           { error ? (<Text style={styles.error}>{error}</Text>) : null }

           <Spacer>
                {/* Email Address */}
               <Input label="Email"
                      value={email}
                      onChangeText={(value) => handleOnchangeText(value, 'email') }
                      autoCapitalize='none'
                      autoCorrect={false} />
                {/* Password */}
               <Input label="Password"
                      value={password}
                      onChangeText={(value) => handleOnchangeText(value, 'password') }
                      autoCapitalize='none'
                      autoCorrect={false}
                      secureTextEntry />
                {/* Signin Button */}
                <Spacer>
                  {/*  SignIn */}
                  { loading ? 
                       
                      <ActivityIndicator size="large" color="#00ff00" /> : 
                      <Button title="Sign In" onPress={submitForm} />
                  }
                </Spacer>
           </Spacer>
           <Text onPress={() => navigation.navigate('Register')} style={styles.link}>Not Registered? Sign Up</Text>

        <Spacer>
        { state.message ? <Text style={styles.error}>{state.message}</Text> : null }       
        </Spacer>
       </ScrollView>
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

export default SigninScreen;