import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

const LoginScreen=()=> {
  return(
    <View style={styles.viewStyle}>
      <StatusBar style='light'/>
      <View style={styles.backCircleStyle}></View>
      <View style={styles.detailStyle} elevation={10}>
        <View style={styles.imageContainerStyle}>
          <Image
            source={require('./assets/logo.png')}
            style={styles.logoStyle}
          />
          <View style={styles.firmNameStyle}>
            <Text style={styles.titleStyle}>Title</Text>
            <Text style={styles.subTitleStyle}>SubTitle</Text>
            <Text>Since 1950</Text>
          </View>
        </View>
        <View style={styles.emailPasswordStyle}>
          <Text style={styles.signInTextStyle}>Sign In</Text>
          <View style={styles.credientialsStyle}>
            <Text style={styles.usernameTextStyle}>Username</Text>
            <TextInput 
              placeholder='username'
              style={styles.usernameStyle}
              placeholderTextColor="#023e80"
            />
            <Text style={styles.passwordTextStyle}>Password</Text>
            <TextInput 
              placeholder="password"
              style={styles.passwordStyle}
              placeholderTextColor="#023e80"
              secureTextEntry={true}
            />
          </View>
          <Text style={styles.forgetPasswordStyle}>Forget Password?</Text>
        </View>
      </View>
      <View style={styles.buttonStyle}>
          <TouchableOpacity 
            style={styles.touchableOpacityStyle}
          >
            <Text style={styles.signInButtonStyle}>Sign In</Text>
          </TouchableOpacity>
        </View>
    </View> 
  )
}
const styles=StyleSheet.create({
  viewStyle:{
    flex:1,
    justifyContent:'center',
    backgroundColor:'#fff'
  },
  backCircleStyle:{
    width:'200%',
    alignSelf:'center',
    position:'absolute',
    height:500,
    borderBottomLeftRadius:500,
    borderBottomRightRadius:500,
    backgroundColor:'#014f86',
    top:'-25%'
  },
  detailStyle:{
    backgroundColor:'#fff',
    marginHorizontal:25,
    borderRadius:13,
  },
  imageContainerStyle:{
    flexDirection:'row',
    justifyContent:'center',
    marginVertical:15
  },
  logoStyle:{
    height:70,
    width:70
  },
  firmNameStyle:{
    padding:5
  },
  titleStyle:{
    color:'#023e8a',
    fontSize:25,
    fontWeight:'bold',
    fontFamily: 'EBGaramond_400Regular',
  },
  subTitleStyle:{
    color:'#023e8a',
    fontSize:15
  },
  signInTextStyle:{
    fontSize:22,
    fontWeight:'bold',
    color:'#023e8a'
  },
  emailPasswordStyle:{
    marginHorizontal:15,
    marginBottom:40
  },
  credientialsStyle:{
    marginVertical:10,
    padding:5
  },
  usernameStyle:{
    height:40,
    borderWidth:1,
    borderRadius:5,
    padding:10,
    borderColor:'#023e8a'
  },
  usernameTextStyle:{
    paddingVertical:7,
    color:'#023e8a'
  },
  passwordStyle:{
    height:40,
    borderWidth:1,
    borderRadius:5,
    padding:10,
    borderColor:'#023e8a'
  },
  passwordTextStyle:{
    paddingTop:15,
    paddingBottom:7,
    color:'#023e8a'
  },
  forgetPasswordStyle:{
    marginLeft:'auto',
    marginRight:10,
    color:'#023e8a',
    textDecorationLine:'underline',
    textDecorationStyle:'solid',
    paddingBottom:10
  },
  buttonStyle:{
    backgroundColor:'#023e8a',
    justifyContent:'center',
    height:40,
    marginTop:30,
    alignSelf:'center',
    borderRadius:5
  },
  touchableOpacityStyle:{
  },
  signInButtonStyle:{
    color:'#fff',
    paddingHorizontal:50,
  }

});

export default LoginScreen;