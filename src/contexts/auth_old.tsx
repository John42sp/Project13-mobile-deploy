import React, {useState, createContext, useEffect, useContext } from "react";
import { View, ActivityIndicator } from "react-native";
import * as auth from "../services/auth";
import AsyncStorage from  '@react-native-community/async-storage';
import api from "../services/api";

interface User {
  name: string;
  email: string;
}

interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn(): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => { //AuthProvider usado no App.tsx
  const [user, setUser] = useState<User | null>(null); //user pode ser nulo(inicializado) ou um objeto(c/ dados do user)
  const [loading, setLoading] = useState(true);
  // poderia utilizar react-native-splash-screen e deixar a tela de splash screen exibindo até terminar a verificação de login e senha, ou poderia usar um  lottie-react-native para ficar bem mais bonito o app.

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
      const storagedToken = await AsyncStorage.getItem('@RNAuth:token');

      // await new Promise((resolve) => setTimeout(resolve, 2000));

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
        api.defaults.headers.Authorization = `Baerer ${storagedToken}`;
      }
      setLoading(false);
    }

    loadStorageData();
  });
  
  async function signIn() {
    const response = await auth.signIn();
    setUser(response.user);

    api.defaults.headers.Authorization = `Baerer ${response.token}`;

    await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
    await AsyncStorage.setItem('@RNAuth:token', response.token);
    
  }

  // function signOut() {
  //   setUser(null);
  // }

  async function signOut() {
    await AsyncStorage.clear();
    setUser(null);
  }



  return (  //DICA: !!user  =  estado do user precisa ser preenchido com os dados do usuário logado para signed ser true
    <AuthContext.Provider value={{ signed: !!user, user, loading, signIn, signOut }}> 
      {/* <AuthContext.Provider value={{signed: Boolean(user), user: {}, signIn}} > */}
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }

  return context;
}

export { AuthContext, useAuth }; //AuthContext usado no UserLogin e routes.tsx