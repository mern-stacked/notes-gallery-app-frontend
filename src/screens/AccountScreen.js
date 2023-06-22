import React, { useContext } from 'react';
import { View, StyleSheet, SafeAreaView } from "react-native";
import { Text, Button, Avatar } from '@rneui/themed';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';


const AccountScreen = ({ route, navigation }) => {
    
    const { state, signout } = useContext(AuthContext);
  
    return(
        <SafeAreaView forceInset={{ top: 'always' }}>
            <View style={styles.container}> 
                <Text h4>Hello, <Text h2>{state.userName}</Text></Text>
                <Text h6>Your Email id is: <Text h4>{state.userEmail}</Text></Text>
                <Text h6>Signed in as: <Text h4>{state.userDesignation}</Text></Text>
                
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