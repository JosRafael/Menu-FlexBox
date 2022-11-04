import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View>
      <View
        style={[
          {
            width: 40,
            height: 40,
            backgroundColor: "steelblue",
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
            width: 48,
            height: 10,
            marginTop: 5,
            backgroundColor: "steelblue",
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
    width: "100%",
    justifyContent: "space-between",
    padding: 22,
    
  },
});
