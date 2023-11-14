import React, {useState} from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;
const HeaderText = styled.Text`
font-size: 25px;
margin-top: 30px;
`;

const Input = styled.TextInput`
  width: 90%;
  height: 50px;
  font-size: 18px;
  background-color: #eee;
  margin-top: 20px;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
`;

const CalcButton = styled.Button`
  margin-top: 10px;
`;

const ResultArea= styled.View`
  width: 90%;
  margin-top: 30px;
  background-color: #eee;
  padding: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
`;

const ResultItemTitle= styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
const ResultItem=styled.Text`
  font-size: 15px;
  margin-bottom: 30px;
`;

const PctArea=styled.View`
  width: 60%;
  flex-direction: row;
  margin: 20px;
  justify-content: space-around;
`;

const PctItem=styled.TouchableOpacity `
  background-color: #2089dc;
  border-radius: 6px;
  padding: 10px;
`;

const TextoButao = styled.Text`
  color: white;
`;

export default function App() {
  const [bill, setBill]= useState('');
  const [tip, setTip] = useState(0);
  const [pct, setPct] = useState(10);

  const calc = ()=>{
    let nBill = parseFloat(bill);
    
    if (nBill) {
      setTip((pct/100)*nBill);
    }else{
      alert("Digite o valor da conta.");
    }

  }

  return (
    <Page>
      <HeaderText>Calculadora de Gorjeta</HeaderText>
      <Input
        placeholder='Qual o valor da conta?'
        placeholderTextColor="#000"
        keyboardType='numeric'
        value={bill}
        onChangeText={n=>setBill(n)}
      />

      <PctArea>
        <PctItem onPress={()=>setPct(5)}><TextoButao>5%</TextoButao></PctItem>
        <PctItem onPress={()=>setPct(10)}><TextoButao>10%</TextoButao></PctItem>
        <PctItem onPress={()=>setPct(15)}><TextoButao>15%</TextoButao></PctItem>
        <PctItem onPress={()=>setPct(20)}><TextoButao>20%</TextoButao></PctItem>
      </PctArea>

      <CalcButton title={`Calcular ${pct}%`} onPress={calc}/>
      
      {tip> 0 &&
      <ResultArea>
        <ResultItemTitle>Valor da Conta</ResultItemTitle>
        <ResultItem>R$ {parseFloat(bill).toFixed(2)}</ResultItem>

        <ResultItemTitle>Valor da Gorjeta</ResultItemTitle>
        <ResultItem>R$ {tip.toFixed(2)} ({pct}%)</ResultItem>

        <ResultItemTitle>Valor Total</ResultItemTitle>
        <ResultItem>R$ {(parseFloat(bill)+tip).toFixed(2)}</ResultItem>
      </ResultArea>
      }
    </Page>
  );
}
