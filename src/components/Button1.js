import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <View
        style={[
          {
            width: 10,
            height: 11,
            backgroundColor: "#35477C",
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
            width: 10,
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
            width: 10,
            height: 11,
            margin: 2,
            backgroundColor: "#35477C",
            borderRadius: 50,
            alignItems: "center",
            justifyContent: "center",
          },
        ]}
      ></View>
      <View
        style={[
          {
            width: 10,
            height: 11,
            margin: 2,
            backgroundColor: "#35477C",
            borderRadius: 50,
            alignItems: "center",
            justifyContent: "center",
          },
        ]}
      ></View>
      <View
        style={[
          {
            width: 10,
            height: 11,
            margin: 2,
            backgroundColor: "#35477C",
            borderRadius: 50,
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
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    paddingTop: 10,
    
  },
});
