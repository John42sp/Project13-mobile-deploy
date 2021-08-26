
import React, { useState, useContext } from 'react';
import { ScrollView, View, StyleSheet, Switch, Text, TextInput, TouchableOpacity, Image, StatusBar, ActivityIndicator } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from "../../contexts/auth";
import * as ImagePicker from 'expo-image-picker';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
// import { signIn } from "../../services/auth";

// import signIn from '../../services/auth';

export default function UserLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');  
    // const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null) as any;    
  
  const navigation = useNavigation();
 

  const { signIn } = useAuth();   


    async function handleLogin() {

    // const response = await signIn();
    // console.log(response);

    signIn()
 

  }

  async function handleNavigateToUserRegister() {

    navigation.navigate('UserRegister');
  }


  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>
      <Text style={styles.title}>Olá, seja bem vindo!</Text>
      
      <Text style={styles.title}>Login</Text>
      {!!errorMessage && <Text>{errorMessage}</Text>}

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={[styles.input, { height: 50 }]}
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={[styles.input, { height: 50 }]}
        value={password}
        onChangeText={setPassword}
      />


      <RectButton style={styles.nextButton} onPress={handleLogin}>
        <Text style={styles.nextButtonText}>Login</Text>
      </RectButton>

      <RectButton style={styles.createUser} onPress={handleNavigateToUserRegister}>
        <Text style={styles.nextButtonText}>Registre-se</Text>
      </RectButton>
    </ScrollView>


  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    color: '#5c8599',
    fontSize: 24,
    fontFamily: 'Nunito_700Bold',
    marginBottom: 32,
    paddingBottom: 24,
    borderBottomWidth: 0.8,
    borderBottomColor: '#D3E2E6'
  },

  label: {
    color: '#8fa7b3',
    fontFamily: 'Nunito_600SemiBold',
    marginBottom: 8,
  },

  comment: {
    fontSize: 11,
    color: '#8fa7b3',
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1.4,
    borderColor: '#d3e2e6',
    borderRadius: 20,
    height: 56,
    paddingVertical: 18,
    paddingHorizontal: 24,
    marginBottom: 16,
    textAlignVertical: 'top',
  },

  uploadedImageContainer: {
      flexDirection: 'row',
  },

  uploadedImage: {
      width: 64,
      height: 64,
      borderRadius: 20,
      marginBottom: 32,
      marginRight: 8,
  },

  imagesInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderStyle: 'dashed',
    borderColor: '#96D2F0',
    borderWidth: 1.4,
    borderRadius: 20,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },

  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
  },

  nextButton: {
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    marginTop: 32,
  },

  nextButtonText: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
    color: '#FFF',
  },

  createUser: {
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    marginTop: 32
  }
})