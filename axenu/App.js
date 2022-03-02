import React from 'react';
import { StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Page1 from './screens/Page1.js';
import Page2 from './screens/Page2.js';
import Page3 from './screens/Page3.js';


const App: () => Node = () => {
  const Stack = createNativeStackNavigator();
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Page1} />
        <Stack.Screen name="Our Partners and Customers" component={Page2} />
        <Stack.Screen name="Our Founder" component={Page3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({

  mainView:{
    marginTop:40,
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  textStyle:{
    color:'#fff',
  }
})

export default App;
