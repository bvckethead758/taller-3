import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla Principal (HomeScreen)</Text>
      <Button
        title="Ir a Detalles"
        onPress={() => navigation.navigate('Details', { message: 'Hola desde Home!' })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    color: '#333',
  },
});
