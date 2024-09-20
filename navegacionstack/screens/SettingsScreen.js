import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Pantalla de configuraciones simple
const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Pantalla de Configuraciones (SettingsScreen)</Text>
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

export default SettingsScreen;