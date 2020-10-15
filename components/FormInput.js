import React from 'react';
import { View, TextInput, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimensions';

import AntDesign from 'react-native-vector-icons/AntDesign';

const FormInput = ({ secureTextEntry,placeholderText,iconType}) => {
    return (
        <View style={styles.inputContainer}>
        <View style={styles.iconStyle}>
            <AntDesign name={iconType} size={25} color="#666" />
        </View>
        <TextInput 
            
            style={styles.input}
            numberOfLines={1}
            placeholder={placeholderText}
            placeholderTextColor="#666"
            secureTextEntry={secureTextEntry}
            
        />
    </View>

    )
}
const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 5,
        marginBottom: 10,
        width: '100%',
        height: windowHeight / 15,
        borderColor: '#ccc',
        borderRadius: 3,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff'
      },
      input: {
        padding: 10,
        flex: 1,
        fontSize: 16,
        fontFamily:'Lato-Regular',
        color: '#333',
        justifyContent: 'center',
        alignItems: 'center',
      },
      inputField: {
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        width: windowWidth / 1.5,
        height: windowHeight / 15,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1
      }
});

export default FormInput;