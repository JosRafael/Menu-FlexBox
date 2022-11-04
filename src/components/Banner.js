import { StyleSheet, Text, View } from "react-native";
import Button1 from "../components/Button1"

export default function Header() {
  return (
    <View style={styles.banner}>
      <View
        style={[
          {
            width: "90%",
            height: "85%",
            backgroundColor: "#4bc4cc",
          },
        ]}
      ></View>
      <Button1></Button1>

      
      
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    flexDirection: "column",
    flexBasis: 260,
    alignItems: "center",
    width: "100%",
    backgroundColor: "steelblue",
    paddingTop: 25,
    paddingHorizontal: 20,
  },
});
