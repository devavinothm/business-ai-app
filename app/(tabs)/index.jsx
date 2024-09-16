import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

export default function HomeScreen() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (message.trim() === '') return;

    setLoading(true); // Start loading
    const userMessage = message;

    const promptedMessage = `You are a business mentor and you are helping a new entrepreneur. The entrepreneur is asking you for advice on how to grow their business. What advice would you give them? \n\nUser: ${userMessage}`;
    setMessage('');

    try {
      const apiKey = "YOUR_API_KEY";
      const { data } = await axios.post(
        'https://api.openai.com/v1/completions',
        {
          model: 'gpt-3.5-turbo-instruct', // Make sure the model name is correct
          prompt: promptedMessage,
          max_tokens: 150,
          n: 1,
          stop: null,
          temperature: 0.7,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
        }
      );

      const aiMessage = data.choices[0].text.trim();
      setResponse(aiMessage);
    } catch (error) {
      console.error('Error:', error); // Log the error
      setResponse('Failed to fetch response from AI.');
    } finally {
      setLoading(false); // Ensure loading is set to false in both success and error cases
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Business GPT</Text>
        <Text style={styles.subTitle}>Your AI-powered business mentor</Text>
      </View>

      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.reactLogo}
      />

      <ScrollView style={styles.responseContainer}>
        <Text style={styles.responseText}>{loading ? 'Loading...' : response}</Text>
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Type your message..."
          value={message}
          onChangeText={text => setMessage(text)}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage} disabled={loading}>
          <Ionicons name="send" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  header: {
    marginTop: 50,
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
  },
  subTitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
  },
  reactLogo: {
    height: 100,
    width: 100,
    alignSelf: 'center',
    marginVertical: 20,
  },
  responseContainer: {
    flex: 1,
    marginVertical: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  responseText: {
    fontSize: 16,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 30,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  sendButton: {
    backgroundColor: '#007BFF',
    borderRadius: 25,
    padding: 10,
    marginLeft: 10,
  },
});
