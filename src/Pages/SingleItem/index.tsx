import React, { useState } from 'react';
import { View,Text } from 'react-native';

 import { Container,
  Main,
  ImageProduct,
  DivPrice,
  Title,
  Avaliation,
  Top,
  Price, 
  Size,
  Color,
  Quantity
 } from './styles';
import { AntDesign } from '@expo/vector-icons';
import BoxSize from '../../components/BoxSize/';
import SelectColor from '../../components/SelectColor/SelectColor';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SingleItem: React.FC = () => {

  const sizes = ['P','M','G','GG'];
  const colors = ['#e08492','#12505f','#6db48e','#84cae0'];
  const [number,setNumber] = useState(0);
function addCart(){
  setNumber(number+1)
}
function removeCart(){
  setNumber(number-1)
}
  return(
    <Container>
      <Main>
        <ImageProduct source={require('../../assets/tshirt.png')}/>

      </Main>
      <DivPrice>
        <Top>
          <Title>T-shirt</Title>
          <Price>R$99</Price>


        </Top>
        
        <Avaliation>
          <AntDesign name="star" size={15} color="#ffd700" />
          <AntDesign name="star" size={15} color="#ffd700" />
          <AntDesign name="star" size={15} color="#ffd700" />
          <AntDesign name="star" size={15} color="#ffd700" />
        4.9</Avaliation>
        <Size>
          <Text style={{fontSize:20,fontFamily:'Poppins_300Light'}}>size:</Text>
          <View style={{marginLeft:'30%',flex:1,flexDirection:'row'}}>

            {sizes.map(item=>(
                <BoxSize key={item} size={item}/>


            ))}
          </View>
        </Size>

        <Color>
          <Text style={{fontSize:20,fontFamily:'Poppins_300Light'}}>cor:</Text>
          <View style={{marginLeft:'30%',flex:1,flexDirection:'row'}}>

            {colors.map(item=>(
               <SelectColor color={item}/>


            ))}
          </View>
        </Color>
        <Quantity>
              <Text style={{fontSize:20,fontFamily:'Poppins_300Light'}}>Quantidade:</Text>
              <TouchableOpacity onPress={removeCart} style={{borderRadius:7,marginLeft:'30%',
              alignItems:'center',justifyContent:'center',
              backgroundColor: '#e8e8e8',width:30,height:30}}>
                  <Text style={{fontSize:30,textAlign:'center',justifyContent:'center'}}>-</Text>
              </TouchableOpacity>

              <Text style={{textAlign:'center',alignItems:'center',
              justifyContent:'center',borderRadius:7,backgroundColor:'#e8e8e8',width:70,height:30,marginLeft:'-15%',marginRight:15,fontSize:20}}>{number}</Text>

               <TouchableOpacity onPress={addCart} style={{borderRadius:7,
              alignItems:'center',justifyContent:'center',
              backgroundColor: '#e8e8e8',width:30,height:30}}>
                  <Text style={{fontSize:26,textAlign:'center',justifyContent:'center'}}>+</Text>
              </TouchableOpacity>
        </Quantity>



          

        

      </DivPrice>
        
    </Container>
  );
}

export default SingleItem;