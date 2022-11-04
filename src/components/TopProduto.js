import { StyleSheet, Text, View } from "react-native";
import Button1 from "../components/Button1"
import Traco from "../components/traco"
import BannerPequeno from "../components/BannerPequeno"

export default function Header() {
  return ( 
   
   <View View style={styles.categoria}>
    <View style={styles.categoria}>  
    <Traco></Traco>
   </View >
   <BannerPequeno></BannerPequeno>
    
   </View>
   

   
   
   
    
    
  );
}

const styles = StyleSheet.create({
  categoria: {
    flexDirection: "row",
    flexBasis: 140,
    width: "100%",
    justifyContent: 'space-between',
    backgroundColor: "steelblue",
  }
});
