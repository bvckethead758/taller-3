import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";

function Screen2({ route, navigation }) {
  const { message } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.message}>HEEY {message}</Text>
      <Button
        title="Ir a Screen 3"
        onPress={() => navigation.navigate('Screen3', { message: 'Hola desde Screen 2' })}
      />
      <Button
        title="Regresar"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  message: {
    fontSize: 18,
    marginBottom: 20,
    color: '#333',
  },
});

export default Screen2;
