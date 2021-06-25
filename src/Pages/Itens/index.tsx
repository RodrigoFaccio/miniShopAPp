import React from 'react';
import { View,Text } from 'react-native';
import Header from '../../components/Header';

 import { Container,Title,Content } from './styles';

const Itens: React.FC = () => {
  return(
   <>
     <Header/>
     <Content>
       <Text>Item</Text>
     </Content>

   </>
   
  );
}

export default Itens;