import React from "react";
import { Text, View, StyleSheet } from "react-native";

function ReplacedComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Se reemplazó el componente</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  message: {
    fontSize: 20,
    color: '#333',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default ReplacedComponent;
