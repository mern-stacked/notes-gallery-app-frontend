import React, { useContext } from 'react';
import { View, StyleSheet } from "react-native";
import { Text, Input, Button, Avatar } from '@rneui/themed';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';


const AccountScreen = ({ navigation }) => {
    const { signout } = useContext(AuthContext);
  
    return(
     <View style={styles.container}> 
        <Text>Account Screen</Text>
        <Spacer>
            <Button title="Sign Out"
            onPress={signout} />
        </Spacer>
    </View>

    );
}


const styles = StyleSheet.create({

    container: {
        padding: 40,
        marginTop: 30
    }
  
})

export default AccountScreen;