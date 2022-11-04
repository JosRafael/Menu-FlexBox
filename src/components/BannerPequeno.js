import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      
   
      <View
        style={[
          {
            width: 150,
            height: 90,
            backgroundColor: "#4bc4cc",
          },
        ]}
      ></View>
      <View
        style={[
        styles.traco2,  {
            width: 130,
            height: 11,
            backgroundColor: "steelblue",
          },
        ]}
      ></View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 30,
    
    right: 20
  },
  traco2: {
    flexDirection: "column",
    paddingTop: 11,
  }
});
