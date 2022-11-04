import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
 
      <View
        style={[
          {
            width: 140,
            height: 130,
            backgroundColor: "#4bc4cc",
            margin: 5,
            alignItems: "center",
            justifyContent: "center",
          },
        ]}
      ></View>
      <View
        style={[
          {
            width: 145,
            height: 11,
            backgroundColor: "#4bc4cc",
            borderRadius: 50,
            margin: 2,
            alignItems: "center",
            justifyContent: "center",
          },
        ]}
      ></View>
      <View
        style={[
          {
            width: 80,
            height: 11,
            backgroundColor: "#4bc4cc",
            borderRadius: 50,
            margin: 4,
            alignItems: "center",
            justifyContent: "center",
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
    justifyContent: "center",
    marginHorizontal: 10,
    paddingTop: 10,
    
  },
});
