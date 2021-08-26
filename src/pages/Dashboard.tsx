import React, { useContext } from "react";
import { View, ScrollView, Text, StyleSheet, Button } from "react-native";
import { useAuth } from '../contexts/auth'

export default function Dashboard() {

    const { user, signOut } = useAuth();

    function handleSignOut() {
      signOut();
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dashboard</Text>
            <Text>{user?.name}</Text>
            <Text>{user?.email}</Text>
           
          <Button title="Sign Out" onPress={handleSignOut} />
        </View>
      );
    //   (
    //     <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>
    //     <Text style={styles.title}>Dashboardddddd</Text>
  

    //   </ScrollView>
    // )
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