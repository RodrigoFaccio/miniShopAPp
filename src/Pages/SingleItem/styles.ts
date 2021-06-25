import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: white;
    height: 100%;

`;
export const Main = styled.View`
    background-color: #e5e5e5;
    width: 100%;
    height: 70%;
    justify-content: center;
    align-items: center;
`;

export const  ImageProduct = styled.Image`
    width: 80%;
    height: 60%;
`;

export const DivPrice = styled.View`
    background-color:white;
    width: 100%;
    height: 40%;
    margin-top:110% ;
    position: absolute;
    
    border-top-right-radius:30px;
    border-top-left-radius:30px;

    

    
`;
export const Top = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items:center;
    margin-top: 5%;
`;
export const Bottom = styled.Text``;

export const Title = styled.Text`
    font-size:25px;
    font-family: 'Poppins_300Light';
    color: #898989;

`;
export const Avaliation = styled.Text`
    font-size:15px;
    font-family: 'Poppins_300Light';
    margin-left: 42px;
    color: #898989;
`;
export const Size = styled.View`
    flex-direction: row;
    width: 100%;
    height: 15%;
    margin-left: 11%;
`;

export const Color = styled.View`
 flex-direction: row;
    width: 100%;
    height: 50%;
    margin-left: 11%;
    `;
export const Quantity = styled.View`
    flex-direction: row;
    
    margin-left: 11%;
    margin-top: -30%;
`;


export const Price = styled.Text`
    font-size:30px;
    font-family: 'Poppins_300Light';
    margin-left: 40%;
    color: #898989;
    
`;

