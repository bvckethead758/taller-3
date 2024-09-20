import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Pantalla de Inicio simple
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Pantalla de Inicio (HomeScreen)</Text>
    </View>
  );
};

// Definición de estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
