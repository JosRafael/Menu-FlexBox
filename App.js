import { StatusBar } from "expo-status-bar";
import { Button, ScrollView, StyleSheet, Text, View, SafeAreaView} from "react-native";
import Header from "../app/src/components/Header";
import Banner from "../app/src/components/Banner";
import Menu from "../app/src/components/Menu";
import Button1 from "../app/src/components/Button1";
import Categorias from "../app/src/components/Categorias";
import TopProduto from "../app/src/components/TopProduto";
import MarketPlace from "../app/src/components/MarketPlace";

export default function App() {
  return (
  <SafeAreaView style={styles.container}>
      <Header></Header>
      <Banner></Banner>
      <ScrollView  horizontal={false} style={styles.container}>
       <Categorias></Categorias>
       <TopProduto></TopProduto>
        <MarketPlace></MarketPlace>
      </ScrollView>
      <Menu></Menu>
    </SafeAreaView>
  );
}
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    
  }
});
