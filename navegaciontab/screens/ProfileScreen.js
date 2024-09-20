import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Pantalla de Perfil, accesible desde la pestaña de "Profile"
const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla de Perfil (ProfileScreen)</Text>
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

export default ProfileScreen;
