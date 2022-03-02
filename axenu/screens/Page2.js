import React from 'react';
import { StyleSheet, Button, View, ScrollView, Image } from "react-native";

const Page2 = ({navigation})=>{
    return(
      <ScrollView style={styles.scrollView}>
        <View style={styles.mainView}> 
          <Image
                style={styles.container}
                source={require('../assets/1.png')}
          />
          <Image
                style={styles.container}
                source={require('../assets/2.png')}
          />
          <Image
                style={styles.container}
                source={require('../assets/3.png')}
          />
          <Image
                style={styles.container}
                source={require('../assets/4.png')}
          />
          <Image
                style={styles.container}
                source={require('../assets/5.png')}
          />
          <Image
                style={styles.container}
                source={require('../assets/6.png')}
          />
          <Image
                style={styles.container}
                source={require('../assets/7.png')}
          />
          <Image
                style={styles.container}
                source={require('../assets/8.png')}
          />
          <Image
                style={styles.container}
                source={require('../assets/9.png')}
          />
          <Image
                style={styles.container}
                source={require('../assets/10.png')}
          />
          <View style={styles.buttonStyle}>
            <Button 
                  title="Our Founder"
                 onPress={() => navigation.push('Our Founder')}
            />
          </View>
        </View>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
  mainView:{
    marginTop: 20,
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  container:{
    resizeMode: "contain",
    width: 200,
    height: 200,
    marginBottom: 5,
  },
  scrollView: {
    backgroundColor: 'white',
  },
  buttonStyle: {
    marginBottom: 70,
}

})


export default Page2