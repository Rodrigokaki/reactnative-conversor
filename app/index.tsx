import { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";

export default function MainScreen(){

  const [input, setInput] = useState<string>("")
  const [result, setResult] = useState<string>("")
  const [isBinary, setIsBinary] = useState<boolean>(false)
  const [lengthTable, setLengthTable] = useState<number>(0)
  const [tableResult, setTableResult] = useState<string>("")
  const [conta, setConta] = useState<string>("")

  function converterBinario(){
    const tempResult = Number(input).toString(2);
    setResult(tempResult);
    atualizarTabela(tempResult, true);
  }

  function converterDecimal(){
    const tempResult = parseInt(input, 2).toString(10);
    setResult(tempResult);
    atualizarTabela(tempResult, false);
  }

  function isBinario(text: string){
    const regex = /^[01]+$/;
    setIsBinary(regex.test(text));
  }

  function atualizarTabela(tempResult: string, isBinario: boolean){
    const length = isBinario ? tempResult.length : input.length;
    setLengthTable(length);

    const resultArray = isBinario ? tempResult : input;
    setTableResult(resultArray);

    atualizarConta(resultArray);
  }

  function atualizarConta(text: string){
    let tempConta = "";

    for(let i = 0; i < text.length; i++){
      if(text[i] === "1"){
        tempConta += `${2**(text.length-i-1)} + `;
      }
    }

    tempConta = tempConta.slice(0, -3);
    tempConta += ` = ${parseInt(text, 2)}`;
    setConta(tempConta);
  }

  return(
    <SafeAreaView style={styles.container}>
    <Text style={{fontSize: 32, color: '#ffffff', fontWeight: 500, marginBottom: 20}}>Conversor</Text>
    <TextInput style={{
      backgroundColor: '#ffffff', borderRadius: 5, textAlign: "right", padding: 3, width: 150, marginBottom: 20
      }}
      inputMode="numeric" 
      placeholder="Digite um número"
      onChangeText={(text) => {
        setInput(text);
        isBinario(text);
      }}>
    </TextInput>
    
    <View style={{gap: 20, marginBottom: 20}}>
      <Button
      title="Binário"
      onPress={converterBinario}
      ></Button>

      <Button 
      title="Decimal"
      onPress={converterDecimal}
      disabled={!isBinary}
      ></Button>
    </View>

    <Text style={{fontSize: 32, color: '#ffffff', fontWeight: 500, marginBottom: 20}}>{result}</Text>
    
    <View style={{flexDirection: 'row'}}>
    {Array.from({ length: lengthTable }).map((_, index) => (
      <View style={styles.cell} key={index}>
        <Text style={{color: '#ffffff', fontSize: 14, margin: 0, padding: 0}}>{2**(lengthTable-index-1)}</Text>
      </View>
    ))}
    </View>

    <View style={{flexDirection: 'row', marginBottom: 20}}>
    {Array.from({ length: lengthTable }).map((_, index) => (
      <View style={styles.cell} key={index}>
        <Text style={{color: '#ffffff', fontSize: 14}}>{tableResult[index]}</Text>
      </View>
    ))}
    </View>

    <Text style={{fontSize: 14, color: '#ffffff', fontWeight: 500, marginBottom: 20}}>{conta}</Text>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#000000',
  },
  button: {
    marginBottom: 20
  },
  cell: {
    padding: 5,
    margin: 0,
    borderWidth: 1,
    borderColor: '#ffffff',
    width: 50,
    alignItems: 'center',
  }
});