import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen=({navigation})=> {
  return (
    <View style={styles.container}>
        <View>
        <TouchableOpacity
                onPress={()=>navigation.replace('Login')}
            >
            <Image
            source={require('./assets/dummy.jpg')}
            style={styles.imageStyle}
            />
            <View style={styles.imageTextStyle}>
                    <Text style={styles.dishStyle}>Some Dish Name Some Dish Name Some Dish Name</Text>
            </View>
        </TouchableOpacity>
        <StatusBar style="auto" />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent:'flex-end'
  },
  imageStyle:{
    height:150,
    width:'auto',
    marginHorizontal:15,
    borderRadius:10,
    marginVertical:12
  },
  imageTextStyle:{
    position:'absolute',
    flex:1,
    backgroundColor:'rgba(0,0,0,0.5)',
    height:150,
    marginHorizontal:15,
    borderRadius:10,
    bottom:10,
    alignItems:'flex-end'
  },
  dishStyle:{
    fontSize:22,
    color:'#fff',
    bottom:-60,
    marginHorizontal:25,
    marginBottom:20,
    textAlign:'left',
  },
});

export default HomeScreen;