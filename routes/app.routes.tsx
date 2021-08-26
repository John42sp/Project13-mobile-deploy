// import React from 'react';
// import {createStackNavigator} from '@react-navigation/stack';

import OrphanagesMap from '../src/pages/OrphanagesMap';
import OrphanageDetails from '../src/pages/OrphanageDetails';
import SelectMapPosition from '../src/pages/CreateOrphanages/SelectMapPosition';
import OrphanageData from '../src/pages/CreateOrphanages/OrphanageData';

// import Dashboard from '../src/pages/Dashboard';

// const AppStack = createStackNavigator();
// // const { Navigator, Screen } = createStackNavigator();

// const AppRoutes: React.FC = () => (

//     // <Navigator screenOptions={{headerShown: true, cardStyle: { backgroundColor: '#f2f3f5'} }} >    
//     //     <Screen
//     //         name="Dashboard" 
//     //         component={Dashboard} 
//     //     />       
//     //     {/* <Screen 
//     //         name="UserRegister" 
//     //         component={UserRegister} 
//     //     />         */}
//     // </Navigator>
//   <AppStack.Navigator >
//     {/* <AppStack.Screen name="OrphanagesMap" component={OrphanagesMap} /> */}
//     <AppStack.Screen name="Dashboard" component={Dashboard} />
//   </AppStack.Navigator>
// );

// export default AppRoutes;

import React, { useContext } from "react";
import { View, ScrollView, Text, StyleSheet, Button } from "react-native";
import {createStackNavigator} from '@react-navigation/stack';
// import AuthContext from '../src/contexts/auth';

import Dashboard from '../src/pages/Dashboard';


// const AppStack = createStackNavigator();

const { Navigator, Screen } = createStackNavigator();

export default function AppRoutes() {

  return (
    
      // <AppStack.Navigator>
      //   <AppStack.Screen name="Dashboard" component={Dashboard} />
      //   {/* <AppStack.Screen name="OrphanagesMap" component={OrphanagesMap} /> */}
      // </AppStack.Navigator>

            <Navigator screenOptions={{headerShown: true, cardStyle: { backgroundColor: '#f2f3f5'} }} >   
                {/* <Screen 
                    name="Dashboard" 
                    component={Dashboard} 
                /> */}
                <Screen 
                    name="OrphanagesMap" 
                    component={OrphanagesMap} 
                /> 
                 <Screen 
                    name="OrphanageDetails" 
                    component={OrphanageDetails} 
                    options={{
                        headerShown: true,
                        // header: () => <Header showCancel={false} title='Orfanato'/>
                    }}
                />
                <Screen 
                    name="SelectMapPosition" 
                    component={SelectMapPosition} 
                    options={{
                        headerShown: true,
                        // header: () => <Header title='Selecione no mapa'/>
                    }}
                />
                <Screen 
                    name="OrphanageData" 
                    component={OrphanageData} 
                    options={{
                        headerShown: true,
                        // header: () => <Header title='Informe os dados'/>
                    }}
                />
            </Navigator>
    
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
})











// import React from 'react';
// // import 'react-native-gesture-handler';
// // import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { AuthProvider } from "../src/contexts/auth";
// const AppStack = createStackNavigator();
// const { Navigator, Screen } = createStackNavigator();

// import OrphanagesMap from '../src/pages/OrphanagesMap';
// import OrphanageDetails from '../src/pages/OrphanageDetails';

// import SelectMapPosition from '../src/pages/CreateOrphanages/SelectMapPosition';
// import OrphanageData from '../src/pages/CreateOrphanages/OrphanageData';
// import UserLogin from '../src/pages/User/UserLogin';
// import UserRegister from '../src/pages/User/UserRegister';



// import Header from '../src/components/Header';

// export default function AppRoutes() {
//     return (
//             <AppStack.Navigator screenOptions={{headerShown: true, cardStyle: { backgroundColor: '#f2f3f5'} }}>
//                 <AppStack.Screen 
//                     name="OrphanagesMap" 
//                     component={OrphanagesMap} 
//                 />
//             </AppStack.Navigator>

//             // <Navigator screenOptions={{headerShown: true, cardStyle: { backgroundColor: '#f2f3f5'} }} >   
//             //     <Screen 
//             //         name="OrphanagesMap" 
//             //         component={OrphanagesMap} 
//             //     />
//             //     <Screen 
//             //         name="OrphanageDetails" 
//             //         component={OrphanageDetails} 
//             //         options={{
//             //             headerShown: true,
//             //             header: () => <Header showCancel={false} title='Orfanato'/>
//             //         }}
//             //     />
//             //     <Screen 
//             //         name="SelectMapPosition" 
//             //         component={SelectMapPosition} 
//             //         options={{
//             //             headerShown: true,
//             //             header: () => <Header title='Selecione no mapa'/>
//             //         }}
//             //     />
//             //     <Screen 
//             //         name="OrphanageData" 
//             //         component={OrphanageData} 
//             //         options={{
//             //             headerShown: true,
//             //             header: () => <Header title='Informe os dados'/>
//             //         }}
//             //     />
//             // </Navigator>
//     )
// }