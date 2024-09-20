import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

const OptionsScreen = () => {
  const [options, setOptions] = useState([
    { id: '1', title: 'Cuenta' },
    { id: '2', title: 'Notificaciones' },
    { id: '3', title: 'Reproducciones y rendimiento' },
    { id: '4', title: 'Privacidad' },
    { id: '5', title: 'Aplicaciones activadas' },
    { id: '6', title: 'Términos y Condiciones' },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Opciones de Configuración</Text>
      <FlatList
        data={options}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.optionItem}>
            <Text style={styles.optionText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 10,
  },
  optionItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    fontSize: 16,
  },
});

export default OptionsScreen;
