import React from "react";
import {View, StyleSheet } from 'react-native';

const Spacer = ({ children }) => {
    return <View style={styles.spacer}>{children}</View>
}

const styles = StyleSheet.create({
    spacer: {
        marginTop: 8,
        marginBottom: 3,
    }
});

export default Spacer;