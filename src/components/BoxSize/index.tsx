import React from 'react';


import { View, Text, StyleSheet } from 'react-native';

interface IndexProps {
  size:string;
}

function BoxSize({size}:IndexProps) {
  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>{size}</Text>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8e8e8',
    textAlign:'center',
    width: 30,
    borderRadius:10,
    height: 30,
    marginLeft:7

  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#898989',
  },
});

export default BoxSize;
