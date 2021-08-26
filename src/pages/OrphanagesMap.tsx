import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import  MapView, { Marker, Callout, PROVIDER_GOOGLE }  from 'react-native-maps'
import { Feather } from '@expo/vector-icons';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import { useAuth } from "../contexts/auth";
 
import mapMarkerImg from '../images/map-marker.png';
import api from '../services/api';

interface OrphanageItem {
  id: number,
  name: string,
  latitude: number,
  longitude: number,
  userId: number
}

export default function OrphanagesMap() {

  const { user, signOut } = useAuth();   

  const [ orphanages, setOrphanages ] = useState<OrphanageItem[]>([]);
    const navigation = useNavigation();


    // console.log(orphanages)
    let isRendered = useRef(false) as any;
     useFocusEffect(() => {
       isRendered = true;
      api.get('orphanages').then(response => {
        if(isRendered) {
          setOrphanages(response.data);
        }
        return null;
      })
      .catch(err => console.log(err));
      return () => {
        isRendered = false;
    };
    })

    function handleNavigateToOrphanageDetails(id: number) {
        navigation.navigate('OrphanageDetails', { id });  //'nome' indicado na rota
    }

    function handleNavigateToCreateOrphanage() {
      navigation.navigate('SelectMapPosition');  //'nome' indicado na rota
  }

    function handleSignOut() {
      alert('Sorry to see you go. Come back soon!!!')
      signOut()
    }
    return (
        <View style={styles.container}>
        {/* <Text>Open up hhhhhh !</Text> */}         

        <MapView 
          style={styles.mapStyle} 
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude:-26.9976938,
            longitude: -48.6297713,
            latitudeDelta: 0.010,
            longitudeDelta:0.010,
          }}
        >
          {orphanages.map(orphanage => {            
            return (
              <Marker 
                key={orphanage.id}
                icon={mapMarkerImg}
                calloutAnchor={{
                  x: 2.7,
                  y: 0.8,
                }}
                coordinate={{
                  latitude: orphanage.latitude,
                  longitude: orphanage.longitude,
                }}>
              {/* //Callout = Popup , tooltil = fazer estilização do zero , onPress: função executada quando click */}
              <Callout tooltip={true} onPress={() => handleNavigateToOrphanageDetails(orphanage.id)} > 
                <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>{orphanage.name}</Text>
                </View>
              </Callout>
            </Marker>
            )
          })}
        </MapView>
        <Text style={styles.welcome}>Olá {user?.name}</Text>
        <Text style={styles.signOut} onPress={handleSignOut}>Sign Out</Text>

        {/* <View style={styles.header}>    
        
            <RectButton title='Sign Out' style={styles.signOutButton} onPress={handleSignOut}>
              <Text style={styles.signOutButtonText} onPress={handleSignOut}>Sign Out</Text>
            </RectButton>
        </View> */}
       
        

        <View style={styles.footer}>  
            <Text style={styles.footerText}>{orphanages.length} orfanatos encontrados</Text>
  
            <RectButton style={styles.createOrphanageButton} onPress={handleNavigateToCreateOrphanage}>
              <Feather name='plus' size={20} color='#fff' />
            </RectButton>
        </View>
      </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: '#fff',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    mapStyle: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    calloutContainer: {
      width: 160,
      height: 46,
      paddingHorizontal: 16,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderRadius: 16,
      justifyContent: 'center',
    },
    calloutText: {
      fontFamily: 'Nunito_700Bold',
      color: '#0089a5',
      fontSize: 14,
    },
    welcome: {
      position: 'absolute',
      right: 24, 
      top: 12,

      fontFamily: 'Nunito_800ExtraBold',
      color: 'green',
      fontSize: 22,
      // fontWeight: 
    },

    signOut:{
      position: 'absolute',
      right: 24, 
      top: 38,

      fontFamily: 'Nunito_700Bold',
      color: 'red',
      fontSize: 14,
    },
    // signOutButton: {
    //   backgroundColor: '#fff',
    //   opacity: 0.8,
    // },

    // signOutButtonText: {
    //   fontFamily: 'Nunito_700Bold',
    //   color: 'red',
    //   fontSize: 14,
    // },

    footer: {
      position: 'absolute',
      left:24,
      right: 24, 
      bottom: 32,
  
      backgroundColor: '#fff',
      borderRadius: 20,
      height: 56,
      paddingLeft: 24,
  
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
  
      shadowColor: 'black',
    },
    footerText: {
      fontFamily: 'Nunito_700Bold',
      color: '#8fa7b3',
    },
    createOrphanageButton: {
      width: 56,
      height: 56,
      backgroundColor:'#15c3d6',
      borderRadius: 20,
  
      justifyContent: 'center',
      alignItems: 'center',
    }
  });