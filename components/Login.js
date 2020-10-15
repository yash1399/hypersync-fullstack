import React, { Component, useContext, useState} from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity,  
    StyleSheet} from 'react-native';
import FormButton from './FormButton';
import FormInput from './FormInput';

class Login extends Component {
  
  render(){
    return (
      <View style={styles.container}>
        <Text styles={styles.text}>HYPERSYNC</Text>

        <FormInput 
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        />
        <FormInput
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
        />
    
        <FormButton
        buttonTitle="Sign In"
        />

        <TouchableOpacity style={styles.forgotButton}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
        </TouchableOpacity>    
        <FormButton
        buttonTitle="Register"
        />
    
      </View>
    
    );
  }
};
  

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f9fafd',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    logo: {
      height: 150,
      width: 150,
      resizeMode: 'cover',
    },
    text: {
      fontFamily: 'Kufam-SemiBoldItalic',
      fontSize: 28,
      marginBottom: 10,
      color: '#051d5f',
    },
    navButton: {
      marginTop: 15,
    },
    forgotButton: {
      marginVertical: 35,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
      fontFamily: 'Lato-Regular',
    },
  });

  export default Login;
