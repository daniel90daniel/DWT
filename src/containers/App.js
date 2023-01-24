import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import Row from '../components/row'

const App = () => {
 return (
   <SafeAreaView style={{ margin: 10 }}>
     <View style={{ backgroundColor:'red', height:30, justify-content: center }}>
       <Text style={{fontSize: 15}}>Drop Welcome Test</Text>
     </View>
     <Row />
   </SafeAreaView>
 );
};
 
export default App;