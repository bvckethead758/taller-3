import React, { useState } from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";

const ImageScreen = () => {
  const [imageUrls, setImageUrls] = useState([
    {
      title: "Tacos",
      url: 'https://content.skyscnr.com/m/2dcd7d0e6f086057/original/GettyImages-186142785.jpg'
    },
    {
      title: "Ensalada",
      url: 'https://st1.uvnimg.com/dims4/default/75968c8/2147483647/thumbnail/1024x576/quality/75/?url=http%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2Faf%2Fe1%2F34c8d9f843b4a2d51fcd42a691d1%2Fcomida-mexicana.jpg'
    },
    {
      title: "Comida rápida",
      url: 'https://elikaeskola.com/wp-content/uploads/dieta-parchis-11-1024x683.jpg'
    },
    {
      title: "Tacos",
      url: 'https://content.skyscnr.com/m/2dcd7d0e6f086057/original/GettyImages-186142785.jpg'
    },
    {
      title: "Ensalada",
      url: 'https://st1.uvnimg.com/dims4/default/75968c8/2147483647/thumbnail/1024x576/quality/75/?url=http%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2Faf%2Fe1%2F34c8d9f843b4a2d51fcd42a691d1%2Fcomida-mexicana.jpg'
    },
    {
      title: "Comida rápida",
      url: 'https://elikaeskola.com/wp-content/uploads/dieta-parchis-11-1024x683.jpg'
    }
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Pantalla de Imágenes</Text>
      <ScrollView>
        {imageUrls.map((item, index) => (
          <View key={index} style={styles.imageContainer}>
            <Text>{item.title}</Text>
            <Image 
              source={{ uri: item.url }} 
              style={styles.image} 
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 10,
  },
  imageContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: 200,
  },
});

export default ImageScreen;
