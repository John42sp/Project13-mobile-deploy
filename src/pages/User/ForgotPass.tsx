
import React, { useState, useContext } from 'react';
import { ScrollView, View, StyleSheet, Switch, Text, TextInput, TouchableOpacity, Image, StatusBar, ActivityIndicator, KeyboardAvoidingView } from 'react-native';
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

interface UserData {
  email: string;
  password: string;
}


export default function UserLogin() {
    const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');  
    // // const [loading, setLoading] = useState(false)
    // const [errorMessage, setErrorMessage] = useState(null) as any;    
  
  const navigation = useNavigation();

    async function handleForgot() {

    // await axios.post('http://localhost:3333/users/forgotpass', { email})
    await api.post('/users/forgotpass', { email})
    alert('Enviamos um e-mail com link de acesso para proceder com recuperação de senha.')
    navigation.navigate('UserLogin');

  }

  async function handleNavigateToLogin() {

    navigation.navigate('UserLogin');
  }




  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>
      <Text style={styles.title}>Recupere sua senha!</Text>
      
      <Text style={styles.label}>Digite seu e-mail</Text>
      <TextInput
        placeholder="E-mail"
        style={[styles.input, { height: 40 }]}
        value={email}
        onChangeText={setEmail}
        textContentType='emailAddress'
        keyboardType='email-address'
        autoCapitalize='none'
        autoCorrect={false}
        autoCompleteType='email'
      />

      <RectButton style={styles.nextButton} onPress={handleForgot}>
        <Text style={styles.nextButtonText}>Enviar</Text>
      </RectButton>

      <View style={styles.nextLinkView} >
         <Text style={styles.nextLinkText} onPress={handleNavigateToLogin}>Voltar para Login</Text>
      </View>

    
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
    marginTop: 50,
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

  input: {
    backgroundColor: '#fff',
    borderWidth: 1.4,
    borderColor: '#d3e2e6',
    borderRadius: 20,
    height: 46,
    paddingVertical: 9,
    paddingHorizontal: 24,
    marginBottom: 16,
    textAlignVertical: 'top',
  },

  nextButton: {
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 42,
    marginTop: 22,
    width: '80%',
    marginLeft: '10%',
  },

  nextButtonText: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
    color: '#FFF',
  },

  nextLinkView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  nextLinkText: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
    color: '#15c3d6',
    height: 56,
    marginTop: 32
  },

})