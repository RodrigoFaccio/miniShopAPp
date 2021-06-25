import React from 'react';
import { View,Text,StatusBar } from 'react-native';

import { Container,Title } from './styles';

const Header: React.FC = () => {
  return(
    <View>
      <StatusBar/>
      <Container>
        
        <Title 
        initial={{ y: -300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -300, opacity: 0 }}>Mini Shop</Title>
      </Container>
      </View>
  );
}

export default Header;