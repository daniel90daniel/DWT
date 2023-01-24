import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import ListItem from '../components/row'

const App = () => {
 return (
   <SafeAreaView style={{ margin: 10, marginLeft: "7%", marginRight: "7%" }}>
     <View style={{ 
      backgroundColor:'#ff6600', 
      height:25, 
      alignItems: "center",
      justifyContent: "flex-start", 
      flexDirection: "row",
      paddingLeft: 10 }}>
      <Text style={{fontSize: 15, fontWeight: "bold"}}>Drop Welcome Test</Text>
      <Text style={{fontSize: 15, color: "white", marginLeft: 10}}>new</Text>
     </View>
     <View style={{ backgroundColor: "#f6f6ef"}}>
      <ListItem />
     </View>
     
   </SafeAreaView>
 );
};
 
export default App;

