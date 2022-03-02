import React from 'react';
import { Text, StyleSheet, Button, View, Image} from "react-native";

const Page1 = ({navigation})=>{
    return(
        <View style={styles.mainView}> 
          <Image
                style={styles.container}
                source={require('../assets/Axenu.png')}
          />
          <Text style={styles.textStyle}>Welcome to Axenu! The best company in the world</Text>
          <Button 
              title="Learn more"
              onPress={() => navigation.push('Our Partners and Customers')}
          />
        </View>
    )
}

const ResetButton = ({ formState }) => (
  <button
      onClick={action(e => {
          formState.resetPendingUploads()
          formState.resetValues()
          e.preventDefault()
      })}
  >
      Reset form
  </button>
)

const styles = StyleSheet.create({
  mainView:{
    marginTop:10,
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#466d78'
    
  },
  textStyle:{
    color:'#fff',
    marginBottom: 10,
    marginTop: 5,
  },
  container:{
    resizeMode: "contain",
    width: 300,
    height: 200,
    marginBottom: 20,
  },
})


export default Page1