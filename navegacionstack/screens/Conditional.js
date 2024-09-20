import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet, Button, Alert } from "react-native";

const Conditional = ({ navigation }) => {
    const [inputText, setInputText] = useState("");

    const handleNavigation = () => {
        if (inputText === "DestinyConditional") {
            navigation.navigate(inputText, { message: "Hola desde Conditional" });
        } else {
            Alert.alert("Error", "Componente no válido");
        }
    };

    return (
        <View style={styles.wrapper}>
            <TextInput
                value={inputText}
                onChangeText={setInputText}
                style={styles.inputField}
                placeholder="Introduce el componente"
                placeholderTextColor="#888"
            />
            <Button title="Enviar" onPress={handleNavigation} />
            <Text style={styles.instructions}>Escribe DestinyConditional</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        padding: 20,
        backgroundColor: '#e0e0e0', // Fondo más claro
        justifyContent: 'center', // Centrar contenido
    },
    inputField: {
        height: 40,
        borderColor: '#666', // Color del borde gris oscuro
        borderWidth: 1,
        borderRadius: 8, // Bordes más redondeados
        backgroundColor: '#f9f9f9', // Fondo más claro
        paddingHorizontal: 12,
        marginBottom: 15,
        color: '#333', // Color de texto más suave
    },
    instructions: {
        marginTop: 10,
        color: '#444', // Color de texto más tenue
        fontSize: 14, // Texto más pequeño
    },
});

export default Conditional;
