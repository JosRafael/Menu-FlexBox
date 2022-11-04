import { StyleSheet, Text, View } from "react-native";
import Button1 from "../components/Button1"
import Promotions from "../components/Promotions"

export default function Header() {
  return ( 
    <View style={styles.categoria}>  
    <Promotions></Promotions> 
    <Promotions></Promotions> 
    <Promotions></Promotions> 
    <Promotions></Promotions> 
    <Promotions></Promotions> 
    
   </View>
   
    
    
  );
}

const styles = StyleSheet.create({
  categoria: {
    flexDirection: "row",
    flexBasis: 110,
    alignItems: "center",
    width: "100%",
    height: 100,
    justifyContent: 'space-between',
    backgroundColor: "skyblue",
    paddingHorizontal: 15,
  }
});
