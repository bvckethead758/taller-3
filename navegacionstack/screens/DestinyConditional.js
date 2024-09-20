import React from "react";
import { Text, View, StyleSheet } from "react-native";

const DestinyConditional = ({ route }) => {
    const { message } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.messageText}>Mensaje: {message}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    messageText: {
        fontSize: 18,
        color: '#333',
        textAlign: 'center',
    },
});

export default DestinyConditional;
