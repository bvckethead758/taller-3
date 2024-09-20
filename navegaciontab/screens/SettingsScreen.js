import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Pantalla de Configuraciones
const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla de Configuraciones (SettingsScreen)</Text>
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
  },
});

export default SettingsScreen;
