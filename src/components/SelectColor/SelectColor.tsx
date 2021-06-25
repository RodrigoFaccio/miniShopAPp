import { Poppins_500Medium } from '@expo-google-fonts/poppins';
import React from 'react';

import { ReactNode } from 'react';


import { View, Text, StyleSheet } from 'react-native';

interface SelectColorProps {
  color:string
}

function SelectColor({ color }: SelectColorProps) {
  return (
    <View style={ {backgroundColor:color, justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    marginLeft:10,
    borderRadius:100} }>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    marginLeft:10,
    borderRadius:100
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
  },
});

export default SelectColor;
