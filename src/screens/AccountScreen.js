import React, { useContext } from 'react';
import { View, StyleSheet, SafeAreaView } from "react-native";
import { Text, Input, Button, Avatar } from '@rneui/themed';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';


const AccountScreen = ({ navigation }) => {
    
    const { state,  signout } = useContext(AuthContext);
  
    return(
        <SafeAreaView forceInset={{ top: 'always' }}>
            <View style={styles.container}> 
                <Text h3>Hello, User </Text>
                <Text></Text>

                <Spacer>
                    <Button title="Sign Out"
                    onPress={signout} />
                </Spacer>
            </View>
        </SafeAreaView>

    );
}


const styles = StyleSheet.create({

    container: {
        padding: 40,
        marginTop: 30
    }
  
})

export default AccountScreen;