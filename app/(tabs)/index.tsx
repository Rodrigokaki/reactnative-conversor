import { SafeAreaView, StyleSheet, Text } from "react-native";

export default function MainScreen(){
  return(
    <SafeAreaView style={styles.container}>
    {/* {Array.from({ length: 5 }).map((_, index) => (
      <View key={index}>
        <Text>View #{index + 1}</Text>
      </View>
    ))} */}
    <Text style={{fontSize: 32}}>Conversor</Text>
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