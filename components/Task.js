import React, {useState} from 'react';
import {
    View,
    ScrollView,
    Text,
    TextInput,
    Button,
    StyleSheet
} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimensions';
import FormButton from './FormButton';

import DatePicker from 'react-native-datepicker';

const Task = () => {
    const [date, setDate] = useState('09-10-2020');
    const [dateDue, setDateDue] = useState('10-10-2020');
    return (
       <View style={styles.container}>
           <Text>TASK CREATION</Text>
           <Text>Title:</Text>
           <View style={styles.inputContainer}>
            <TextInput
            style={styles.input}
            placeholder="Enter Task Name"
            keyboardType="default"
            />
           </View>

           <Text>Description:</Text>
            <View style={styles.inputContainers}> 

            <TextInput 
            style={styles.input}
            placeholder="Describe the task" 
            keyboardType="default"/>
            </View>

            <View style={styles.align}>
                <Text>To:     </Text>
                <Text>                            From:</Text>
            </View>
            <View style={styles.align}>
                <View>
                    <DatePicker
                    date={date}
                    mode="date"
                    placeholder="Select Date"
                    format="DD-MM-YYYY"
                    minDate="01-01-2019"
                    maxDate="01-01-2045"
                    confirmBtnText="Confirm"
                    cancelBtnText ="Cancel"
                    customStyles={{
                        dateIcon: {
                        //display: 'none',
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0,
                        },
                        dateInput: {
                        marginLeft: 36,
                        },
                    }}
                    onDateChange={(date) => {
                        setDate(date);
                    }}
                    />
                </View>

            
                <View>
                    <DatePicker
                        date={dateDue}
                        mode="date"
                        placeholder="Select Date"
                        format="DD-MM-YYYY"
                        minDate="01-01-2019"
                        maxDate="01-01-2045"
                        confirmBtnText="Confirm"
                        cancelBtnText ="Cancel"
                        customStyles={{
                            dateIcon: {
                            //display: 'none',
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0,
                            },
                            dateInput: {
                            marginLeft: 36,
                            },
                        }}
                        onDateChange={(dateDue) => {
                            setDateDue(dateDue);
                        }}
                    />
                </View>      
            </View>
            <Text style={styles.margin}>Issued by: </Text>
            <View style={styles.inputContainer}> 
                <View styles={styles.inputContainer}>
                    
                    <TextInput
                    style={styles.input}
                    placeholder="Enter Your name"
                    keyboardType="default"/>

                </View>
            </View>

            <View style={styles.button}>
                <FormButton buttonTitle="Create"/>
            </View>

            
                

        </View>

    );
} 

const styles = StyleSheet.create({

    button: {
        padding: 50, 
        

    },

    align: {
        display: 'flex',
        flexDirection:'row'


    },
    margin:{
        marginTop: 10

    },
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      },
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
      inputContainers: {
        marginTop: 5,
        marginBottom: 10,
        width: '100%',
        height: windowHeight / 5,
        borderColor: '#ccc',
        borderRadius: 3,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff'
      },
      input: {
        padding: 5,
        flex: 1,
        fontSize: 16,
        fontFamily:'Lato-Regular',
        color: '#333',
       
      },
      inputField: {
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        width: windowWidth / 1.5,
        height: windowHeight / 10,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1
      }
});


export default Task;

