import React from "react";
import { Button, View, StyleSheet } from "react-native";

function Replace({ navigation }) {
  const handleReplace = () => {
    // Aquí puedes añadir cualquier lógica antes de reemplazar la pantalla
    navigation.replace('ReplacedComponent');
  };

  return (
    <View style={styles.container}>
      <Button
        title="Reemplazar"
        onPress={handleReplace}
        color="#841584" // Personaliza el color del botón
        accessibilityLabel="Reemplazar la pantalla actual con otra"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2', // Color de fondo
    padding: 20,
  },
});

export default Replace;
