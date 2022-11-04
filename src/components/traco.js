import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      
   
      <View
        style={[
          {
            width: 200,
            height: 11,
            backgroundColor: "#4bc4cc",
            borderRadius: 50,
            margin: 2,
          },
        ]}
      ></View>
      <View
        style={[
        styles.traco2,  {
            width: 130,
            height: 11,
            backgroundColor: "#4bc4cc",
            borderRadius: 50,
            margin: 10,
            marginHorizontal: 2
          },
        ]}
      ></View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    justifyContent: "flex-start",
    marginTop: 20,
    paddingHorizontal: 10,
    paddingTop: 10,
    
  },
  traco2: {
    flexDirection: "column",
    paddingTop: 10,
  }
});
