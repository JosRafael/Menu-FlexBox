import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ButtonMenu from "./ButtonMenu"

export default function Banner() {
  return (
    <View style={styles.header}>
      <ButtonMenu></ButtonMenu>
      <ButtonMenu></ButtonMenu>
      <ButtonMenu></ButtonMenu>
      <ButtonMenu></ButtonMenu>
      <ButtonMenu></ButtonMenu>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    flexBasis: 55,
    backgroundColor: "steelblue",
    width: "100%",
    height: "20%",
    justifyContent: 'space-between',
    alignItems: "center",
    paddingHorizontal: 45,
  }
});
