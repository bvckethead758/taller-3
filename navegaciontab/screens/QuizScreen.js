import React, { useState } from "react";
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from "react-native";
import { RadioButton } from 'react-native-paper';

export default function QuizScreen() {
  const [answer, setAnswer] = useState({
    answer1: '',
    answer2: '',
    answer3: '',
    answer4: ''
  });

  const [allAnswered, setAllAnswered] = useState(false);

  const putAnswer = (addAnswer, value) => {
    setAnswer(prevAnswers => ({
      ...prevAnswers,
      [addAnswer]: value
    }));
  };

  const allQuestionsAnswered = () => {
    return Object.values(answer).every(answer => answer.trim() !== '');
  };

  const handleSubmit = () => {
    if (allQuestionsAnswered()) {
      console.log('Respuestas enviadas:', answer);
      setAllAnswered(true);
    } else {
      alert('Por favor, responde a todas las preguntas');
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <View style={styles.quizContainer}>
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>¿Cuál es tu color favorito?</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Escribe tu respuesta"
            value={answer.answer1}
            onChangeText={text => putAnswer('answer1', text)}
          />
        </View>

        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>¿Cuál de estos tres dice verde?</Text>
          <RadioButton.Group
            onValueChange={value => putAnswer('answer2', value)}
            value={answer.answer2}
          >
            <RadioButton.Item label="Rojo" value="rojo" />
            <RadioButton.Item label="Azul" value="azul" />
            <RadioButton.Item label="Verde" value="verde" />
          </RadioButton.Group>
        </View>

        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>¿Cuándo se descubrió América?</Text>
          <RadioButton.Group
            onValueChange={value => putAnswer('answer3', value)}
            value={answer.answer3}
          >
            <RadioButton.Item label="1942" value="1942" />
            <RadioButton.Item label="1492" value="1492" />
            <RadioButton.Item label="1249" value="1249" />
          </RadioButton.Group>
        </View>

        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>¿Quién inventó la máquina de Turing?</Text>
          <RadioButton.Group
            onValueChange={value => putAnswer('answer4', value)}
            value={answer.answer4}
          >
            <RadioButton.Item label="Ernest Rutherford" value="Ernest Rutherford" />
            <RadioButton.Item label="Isaac Newton" value="Isaac Newton" />
            <RadioButton.Item label="Alan Turing" value="Alan Turing" />
          </RadioButton.Group>
        </View>

        <Button title="Enviar respuestas" onPress={handleSubmit} />

        {allAnswered ? (
          <View style={styles.resultContainer}>
            <Text>Respuesta 1: {answer.answer1}</Text>
            <Text>Respuesta 2: {answer.answer2}</Text>
            <Text>Respuesta 3: {answer.answer3}</Text>
            <Text>Respuesta 4: {answer.answer4}</Text>
          </View>
        ) : (
          <Text style={styles.errorText}>Por favor, responde todas las preguntas</Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 50, // Esto permite espacio suficiente al final para que el contenido no quede "cortado".
  },
  quizContainer: {
    padding: 10,
  },
  questionContainer: {
    marginVertical: 15,
  },
  questionText: {
    fontSize: 16,
    marginBottom: 5,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  resultContainer: {
    marginTop: 20,
  },
  errorText: {
    marginTop: 20,
    color: 'red',
    textAlign: 'center',
  },
});
