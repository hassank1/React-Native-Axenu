import React from 'react';
import { Text, StyleSheet, View, Image } from "react-native";

const Page3 = ()=>{
    return(
        <View style={styles.mainView}> 
          <Text style={styles.textStyle}>
          Simon Nilsson, CEO and founder of Axenu
          </Text>
          <Image
                style={styles.container}
                source={require('../assets/Founder.png')}
          />
        </View>
    )
}

const styles = StyleSheet.create({
  mainView:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  textStyle:{
    color:'black',
    marginBottom: 20,
  },
  container:{
    resizeMode: "contain",
    width: 400,
    height: 400,
    marginBottom: 5,
  },
})


export default Page3