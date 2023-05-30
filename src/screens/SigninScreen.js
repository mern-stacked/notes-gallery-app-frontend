import React from 'react';
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from '@rneui/themed';
import Spacer from '../components/Spacer';

const SigninScreen = ({ navigation }) => {
  
    return (
        <View style={styles.container}>
           <Spacer>
               <Text h4 style={styles.heading}>Sign In to upload a Note.</Text>
               <Spacer />
               <Spacer />
           </Spacer>
          
           <Spacer>
               <Input label="Email"
                    //   value={email}
                    //   onChangeText={setEmail}
                      autoCapitalize='none'
                      autoCorrect={false} />
           </Spacer>
           <Spacer>
               <Input label="Password"
                    //   value={password}
                    //   onChangeText={setPassword}
                      autoCapitalize='none'
                      autoCorrect={false}
                      secureTextEntry />
           </Spacer>
          
           <Spacer>
             <Button title="Sign In" onPress={() => {} } />
           </Spacer>
           <Text onPress={() => navigation.navigate('Register')} style={styles.link}>Not Registered? Sign Up</Text>

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

export default SigninScreen;