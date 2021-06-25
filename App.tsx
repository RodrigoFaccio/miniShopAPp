import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import {
  Poppins_700Bold,useFonts,
  Poppins_300Light
} from "@expo-google-fonts/poppins";

export default function App() {
  
  let [loading] = useFonts({
   Poppins_700Bold,
   Poppins_300Light

    
  });
 if(!loading){
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size="large" color="#666" />

        </View>
    );
}
  return (
      <Routes/>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
