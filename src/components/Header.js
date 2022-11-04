import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <View
        style={[
          {
            width: 40,
            height: 40,
            backgroundColor: "steelblue",
            borderRadius: 10,
          },
        ]}
      ></View>
      <View
        style={[
          {
            width: 125,
            height: 11,
            backgroundColor: "steelblue",
            borderRadius: 10,
          },
        ]}
      ></View>
      <View
        style={{
          width: 40,
          height: 40,
          backgroundColor: "steelblue",
          borderRadius: 10,
        }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    flexBasis: 110,
    alignItems: "center",
    backgroundColor: "skyblue",
    width: "100%",
    height: "20%",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingHorizontal: 15,
  },
});
