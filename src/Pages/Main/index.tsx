import React, { useState } from 'react';
import { View,Text,FlatList,Image } from 'react-native';
import Header from '../../components/Header';

import {Content,TitleCard,Price } from './styles';
import {RectButton,RectButtonProps, TouchableOpacity} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';






const Main: React.FC = () => {
   const navigation = useNavigation();

  const [roupas,setRoupas] = useState(['1','2','3']);
  const DATA = [
  {
    id: '1',
    title: 'T-Shirt',
    img: require('../../assets/jacket.png'),
    valor: 'R$89,00'
  },
  {
    id: '2',
    title: 'T-Shirt',
     img: require('../../assets/beanies.png'),
    valor: 'R$99,00'

  },{
    id: '3',
    title: 'T-Shirt',
    img: require('../../assets/tshirt.png'),
    valor: 'R$109,00'

  },
  {
    id: '4',
    title: 'T-Shirt',
    img: require('../../assets/tshirt.png'),
    valor: 'R$119,00'

  },
   {
    id: '5',
    title: 'T-Shirt',
    img: require('../../assets/tshirt.png'),
    valor: 'R$119,00'

  },
   {
    id: '6',
    title: 'T-Shirt',
    img: require('../../assets/tshirt.png'),
    valor: 'R$119,00'

  },
  
];
  return(
   <>
     <Header/>
     <Content>
       <FlatList 
       style={{marginBottom:20}}
                    data={DATA}
                    numColumns={2}
                     showsVerticalScrollIndicator={false}
                    onEndReachedThreshold={0.1}
                   renderItem={({ item }) => (
                     <RectButton onPress={()=>{navigation.navigate("SingleItem")}} key={item.id} style={{width:160,height: 230, backgroundColor: '#e8e8e8',
                      marginTop:20,marginLeft:10,borderRadius:12,justifyContent:'center',alignItems:'center'}}>
                       <Image style={{width:120,height:130}} source={item.img} />
                       <TitleCard>{item.title}</TitleCard>
                       <Price>{item.valor}</Price>
                     </RectButton>
                       
                    )}
                   
                   
                 />
       
      </Content> 

         
        

   </>
   
  );
}

export default Main;