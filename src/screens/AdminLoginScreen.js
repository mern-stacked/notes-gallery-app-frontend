import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button, Avatar } from '@rneui/themed';
import Spacer from '../components/Spacer';


const AdminLoginScreen = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>           
            <Spacer>
                <Avatar
                    size={68}
                    rounded
                    icon={{ name: "book", type: "font-awesome" }}
                    containerStyle={{ backgroundColor: "blue", marginTop: 30, marginBottom: 30, marginLeft: 140 }}
                />
                <Text h4 style={styles.center}>Admin Login.</Text>
            </Spacer>
            <Spacer />
            <Spacer />

            <Spacer>                    
                {/* Email Address */}
                <Input label="Email"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize='none'
                    autoCorrect={false}
                    placeholder="Enter email" />
                 {/* Password */}
                 <Input label="Password"
                    value={password}
                    onChangeText={setPassword}
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry 
                    placeholder="Enter password" />
                 {/* AdminLogin Button */}
                 <Spacer>
                   <Button title="Login" onPress={() => signup({ uname, email })} />
                 </Spacer>
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

    link:{
        textAlign: 'center',
        color: 'blue',
        textDecorationLine: 'underline',
        margin: 10
    }

})


export default AdminLoginScreen;