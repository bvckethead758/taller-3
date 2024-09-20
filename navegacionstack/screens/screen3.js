import React from "react";
import { Button, Text, View } from "react-native";
import { CommonActions } from "@react-navigation/native";

const Screen3 = ({ route, navigation }) => {
    const { message } = route.params;

    const handleGoBack = () => navigation.goBack();

    const handleReset = () => navigation.dispatch(
        CommonActions.reset({
            index: 0,
            routes: [{ name: 'Screen1' }],
        })
    );

    return (
        <View>
            <Text>Hola {message}</Text>
            <Button
                title="Regresar"
                onPress={handleGoBack}
            />
            <Button
                title="Reiniciar pilas"
                onPress={handleReset}
            />
        </View>
    );
};

export default Screen3;