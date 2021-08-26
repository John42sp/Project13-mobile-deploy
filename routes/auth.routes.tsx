import React from 'react';
// import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from "../src/contexts/auth";
// const { Navigator, Screen } = createStackNavigator();

import OrphanagesMap from '../src/pages/OrphanagesMap';
import OrphanageDetails from '../src/pages/OrphanageDetails';

import SelectMapPosition from '../src/pages/CreateOrphanages/SelectMapPosition';
import OrphanageData from '../src/pages/CreateOrphanages/OrphanageData';
import UserLogin from '../src/pages/User/UserLogin';
import UserRegister from '../src/pages/User/UserRegister';
import ForgotPass from '../src/pages/User/ForgotPass';
import ChangePass from '../src/pages/User/ChangePass';


const AuthStack = createStackNavigator();



import Header from '../src/components/Header';

export default function AuthRoutes() {
    return (      
        <AuthStack.Navigator >
            <AuthStack.Screen 
                name="UserLogin" 
                component={UserLogin} 
                // options={{
                //     title: "Log In",
                //     headerTintColor: "#4aa3ba",
                //     headerStyle: {
                //       backgroundColor:  "#000",
                //     },
                //   }}
            />
            <AuthStack.Screen name="UserRegister" component={UserRegister} />
            <AuthStack.Screen name="ForgotPass" component={ForgotPass} />
            <AuthStack.Screen name="ChangePass" component={ChangePass} />

        </AuthStack.Navigator> 


                // <Navigator screenOptions={{headerShown: true, cardStyle: { backgroundColor: '#f2f3f5'} }} >    
                //     <Screen
                //         name="UserLogin" 
                //         component={UserLogin} 
                //     />       
                //     <Screen 
                //         name="UserRegister" 
                //         component={UserRegister} 
                //     />        
                // </Navigator>
    )
}