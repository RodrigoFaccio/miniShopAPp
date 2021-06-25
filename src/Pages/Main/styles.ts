import React from 'react';
import { motion } from 'framer-motion';
import {RectButton,RectButtonProps, TouchableOpacity} from 'react-native-gesture-handler';

import { keyframes } from '@emotion/react';


import styled from 'styled-components';

export const Container = styled.View`
  background-color:white;
  height: 100px;
  justify-content: center;
  align-items: center;

`;


export const Title = styled.Text`
  font-size:28px;
  font-family:'Poppins_700Bold';
  
`
export const Content = styled.ScrollView`
  font-size:28px;
  margin-left:5%
  
`
export const CardItem = styled.View`
    border-color:gray;
    background-color: #e8e8e8;
    width:160px;
    height: 65%;
    border-radius: 10px;
`;
export const TitleCard = styled.Text`
  font-size: 20px;
`;
export const Price = styled.Text`
  font-size: 15px;
`;



