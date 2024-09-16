import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Linking } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function DeveloperScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://deva-vinoth.web.app/devavinoth.jpeg' }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Deva Vinoth</Text>
        <Text style={styles.role}>AI Developer & Tech Enthusiast</Text>
        <Text style={styles.bio}>
          Passionate about AI, ML, and building innovative solutions to solve real-world problems. Always eager to learn and share knowledge with the community.
        </Text>
        <View style={styles.skillsContainer}>
          <Text style={styles.skillsTitle}>Skills</Text>
          <View style={styles.skills}>
            <Text style={styles.skill}>Python</Text>
            <Text style={styles.skill}>React Native</Text>
            <Text style={styles.skill}>TensorFlow</Text>
            <Text style={styles.skill}>Firebase</Text>
            <Text style={styles.skill}>Node.js</Text>
          </View>
        </View>
        <View style={styles.socialsContainer}>
          <TouchableOpacity style={styles.socialButton} onPress={() => Linking.openURL('https://www.linkedin.com/in/devavinoth')}>
            <Ionicons name="logo-linkedin" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton} onPress={() => Linking.openURL('https://github.com/devavinothm')}>
            <Ionicons name="logo-github" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton} onPress={() => Linking.openURL('https://www.youtube.com/@devavinoth')}>
            <Ionicons name="logo-youtube" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.contactButton}>
          <Text style={styles.contactButtonText}>Contact Me</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  profileContainer: {
    alignItems: 'center',
    padding: 20,
    marginTop: 140,
    backgroundColor: '#ffffff',
    margin: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 4,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  role: {
    fontSize: 18,
    color: '#666',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  skillsContainer: {
    width: '100%',
    marginBottom: 20,
  },
  skillsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  skills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  skill: {
    backgroundColor: '#e0e0e0',
    color: '#333',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    margin: 4,
    fontSize: 14,
    fontWeight: 'bold',
  },
  socialsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  socialButton: {
    backgroundColor: '#0077B5',
    padding: 12,
    borderRadius: 50,
    marginHorizontal: 8,
    elevation: 2,
  },
  contactButton: {
    backgroundColor: '#0077B5',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 30,
  },
  contactButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
