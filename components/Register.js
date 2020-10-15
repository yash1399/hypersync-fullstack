import React, {Component} from 'react';
import FormButton from './FormButton';
import FormInput from './FormInput';
import { 
    View, 
    Text, 
    TouchableOpacity,  
    StyleSheet} from 'react-native';

    class Register extends Component{
        render(){
            return(
                <View style={styles.container}>
                    <Text>REGISTER</Text>
                
            
                    <FormInput
                    placeholderText="First Name"
                    keyboardType="default"
                    autoCorrect={false}
                    autoCapitalize="none" 
                    secureTextEntry={false}
                    />
            
                    <FormInput
                    placeholderText="Last Name"
                    keyboardType="default"
                    autoCorrect={false}
                    autoCapitalize="none" 
                    secureTextEntry={false}
                    />
            
                    <FormInput 
                    placeholderText="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={false}
                    />
                    <FormInput
                    placeholderText="Password"
                    secureTextEntry={true}
                    />
            
                    <FormInput
                    placeholderText="Confirm Password"
                    
                    secureTextEntry={false}
                    />
                
                    <FormButton
                    buttonTitle="Register"
                    />
                
                    <TouchableOpacity style={styles.forgotButton}>
                    <Text style={styles.navButtonText}>Already have an account? Sign In</Text>
                    </TouchableOpacity>    
            
                </View>
                )
        };
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
export default Register;