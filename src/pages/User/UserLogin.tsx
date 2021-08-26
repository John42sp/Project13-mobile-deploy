
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
    const [password, setPassword] = useState('');  
    // const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null) as any;    
  
  const navigation = useNavigation();
 

  const { signIn } = useAuth();   

    async function handleLogin() {

    // const response = await signIn();
    // console.log(response);

    // signIn()
  
    await signIn({email, password});

  }

  async function handleForgot() {
    
    navigation.navigate('ForgotPass');

  }

  async function handleNavigateToUserRegister() {

    navigation.navigate('UserRegister');
  }

  async function handleNavigateToChangePass() {

    navigation.navigate('ChangePass');
  }


  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>
      <View style={styles.titleView}>
        <Text style={styles.title}>Olá, seja bem vindo!</Text>
        
        <Text style={styles.title}>Login</Text>

      </View>

      {!!errorMessage && <Text>{errorMessage}</Text>}

      <Text style={styles.label}>Email</Text>
      <TextInput
        placeholder="Email"
        style={[styles.input, { height: 40 }]}
        value={email}
        onChangeText={setEmail}
        textContentType='emailAddress'
        keyboardType='email-address'
        autoCapitalize='none'
        autoCorrect={false}
        autoCompleteType='email'
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
      
        placeholder="Senha"
        secureTextEntry={true}
        style={[styles.input, { height: 40 }]}
        value={password}
        onChangeText={setPassword}
        autoCapitalize='none'

      /> 

      <RectButton style={styles.nextButton} onPress={handleLogin}>
        <Text style={styles.nextButtonText}>Login</Text>
      </RectButton>

      {/* <RectButton style={styles.createUser} onPress={handleNavigateToUserRegister}>
        <Text style={styles.nextButtonText}>Registre-se</Text>
      </RectButton> */}
      <View style={styles.nextLinkView} >
         <Text style={styles.nextLinkText} onPress={handleNavigateToUserRegister}>Registre-se</Text>
      </View>

      <View style={styles.forgotView}>
        <Text style={styles.forgotText} onPress={handleForgot}>Esqueci minha senha</Text>
        <Text style={styles.forgotText} onPress={handleNavigateToChangePass}>Mudar senha</Text>

      </View>  

    </ScrollView>


  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  titleView: {
    justifyContent: 'center',
    alignItems: 'center',
  }, 

  title: {
    color: '#5c8599',
    fontSize: 24,
    fontFamily: 'Nunito_700Bold',
    marginBottom: 0,
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
    height: 56,
    paddingVertical: 9,
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


  forgotView: {
    justifyContent:'center',
    alignItems: 'center',
  },

  forgotText: {  
    color: '#8fa7b3',
    fontFamily: 'Nunito_600SemiBold',
    marginTop: 10,
  },  

  nextButton: {
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 46,
    marginTop: 32,
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
    // height: 56,
    marginTop: 32
  },

})