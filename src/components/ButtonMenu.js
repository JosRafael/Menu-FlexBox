import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View>
      <View
        style={[
          {
            width: 25,
            height: 25,
            backgroundColor: "#4bc4cc",
            borderRadius: 50,
            alignItems: "center",
            justifyContent: "center",
          },
        ]}
      ></View>
      <View
        style={[
          styles.container, {
            width: 28,
            height: 5,
            marginTop: 5,
            backgroundColor: "#4bc4cc",
            borderRadius: 10,
            
            
          },
        ]}
      ></View>
   

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
});
