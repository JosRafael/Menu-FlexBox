import { StyleSheet, Text, View } from "react-native";
import Button1 from "../components/Button1";
import Promotions from "../components/Promotions";
import Cpl from "../components/Cpl";

export default function Header() {
  return (
    <View style={styles.categoria}>
      <View style={styles.categoria}>
        <Cpl></Cpl>
        <Cpl></Cpl>
        <Cpl></Cpl>
      </View>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  categoria: {
    flexDirection: "row",
    flexBasis: 200,
    alignItems: "center",
    width: "100%",
    height: 200,
    justifyContent: "space-between",
    backgroundColor: "skyblue",
    paddingHorizontal: 10,
  },
});
