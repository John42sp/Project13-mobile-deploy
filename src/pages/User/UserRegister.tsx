
import React, { useState } from 'react';
import { ScrollView, KeyboardAvoidingView, Platform, View, StyleSheet, Switch, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
// import * as ImagePicker from 'expo-image-picker';
import api from '../../services/api';



export default function UserRegister() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [firstPassword, setFirstPassword] = useState('');  
    const [password, setPassword] = useState('');  


  const navigation = useNavigation();



  async function handleCreateUser() {
        console.log({
        name,
        email,
        password,
        firstPassword
    })

    if(name === ""|| email === "" || firstPassword === "" || password === "") {
      alert('Preencha todos os campos!')
      return;
    }

    if(firstPassword != password){
      alert('As duas senhas são diferentes. Tente denovo!')
      setFirstPassword('');
      setPassword('');
      navigation.navigate('UserRegister');
    }

    if(firstPassword == password){
      const data = {
        name,
        email,
        password,
      }
      //AQUI O DATA APPEND NÃO FUNCIONA
      // const data = new FormData();
      // data.append('name', name);   
      // data.append('email', email);
      // data.append('password', password);
      // console.log(data)
      try {

        const response = await api.post('users/new', data);
        console.log(response.data);
  
        alert(response.data)
        navigation.navigate('UserLogin');
    
        setName('');
        setEmail('');
        setFirstPassword('');
        setPassword('');


      } catch(err) {
        console.log('Some thing went wrong when creating user', err)
      }

  

    }  
  
  }

  return (
    // <KeyboardAvoidingView behavior="padding" enabled={Platform.OS==='ios'} style={styles.container} >
     <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}> 
     <View style={styles.titleView}>
      <Text style={styles.title}>Cadastre-se</Text>
     </View>

      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={[styles.input]}
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
        style={[styles.input]}
        value={firstPassword}
        onChangeText={setFirstPassword}
        autoCapitalize='none'

      />

      <Text style={styles.label}>Senha novamente</Text>
      <TextInput
        style={[styles.input]}
        value={password}
        onChangeText={setPassword}
        autoCapitalize='none'

      />

      <RectButton style={styles.nextButton} onPress={handleCreateUser}>
        <Text style={styles.nextButtonText}>Cadastrar</Text>
      </RectButton>
    </ScrollView>
    /* </KeyboardAvoidingView> */
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  titleView: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: '#5c8599',
    fontSize: 24,
    fontFamily: 'Nunito_700Bold',
    marginBottom: 16,
    paddingBottom: 10,
    borderBottomWidth: 0.8,
    borderBottomColor: '#D3E2E6'
  },

  label: {
    color: '#8fa7b3',
    fontFamily: 'Nunito_600SemiBold',
    marginBottom: 2,
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
    height: 40,
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

  nextButton: {
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 46,
    marginTop: 16,
    width: '80%',
    marginLeft: '10%',
  },

  nextButtonText: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
    color: '#FFF',
  }
})