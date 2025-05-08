import { SafeAreaView, StyleSheet, Text, TextInput } from "react-native";

export default function MainScreen(){
  return(
    <SafeAreaView style={styles.container}>
    {/* {Array.from({ length: 5 }).map((_, index) => (
      <View key={index}>
        <Text>View #{index + 1}</Text>
      </View>
    ))} */}
    <Text style={{fontSize: 32, color: '#ffffff', fontWeight: 500, marginBottom: 20}}>Conversor</Text>
    <TextInput style={{
      backgroundColor: '#ffffff', borderRadius: 5, textAlign: "right", padding: 3
      }} 
      placeholder="Digite um número">

    </TextInput>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 40
  }
});