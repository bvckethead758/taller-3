import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";

function Screen1({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a la primera pantalla</Text>
      <Button
        title="Ir a Screen 2"
        onPress={() => navigation.navigate('Screen2', { message: 'Hola desde Screen 1' })}
      />
      <Button
        title="Ir a Replace"
        onPress={() => navigation.navigate('Replace')}
      />
      <Button
        title="Ir a Conditional"
        onPress={() => navigation.navigate('Conditional')}
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
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    color: '#333',
  },
});

export default Screen1;
